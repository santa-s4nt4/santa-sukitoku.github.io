"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
require('three-obj-loader')(THREE);
const MTLLoader = require('three-mtl-loader');
class ObjLoader {
    constructor() {
        this.cache = {};
        this.objLoader = new THREE.OBJLoader();
        this.mtlLoader = new MTLLoader();
    }
    load(model) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = model.PATH;
            const key = `${model.PATH}:${model.MATERIAL || '_'}`;
            const cache = this.cache[key];
            if (cache) {
                return Promise.resolve(cache.obj);
            }
            if (model.MATERIAL) {
                const materials = yield this.loadMtl(model.MATERIAL);
                console.log(materials);
                materials.preload();
                this.objLoader.setMaterials(materials);
            }
            else {
                this.objLoader.setMaterials(null);
            }
            const obj = yield this.loadObj(model.PATH);
            let box;
            obj.traverse(o => {
                if (o instanceof THREE.Mesh &&
                    o.geometry instanceof THREE.BufferGeometry) {
                    o.geometry.computeBoundingBox();
                    if (!box) {
                        box = o.geometry.boundingBox;
                    }
                    else {
                        box.union(o.geometry.boundingBox);
                    }
                }
            });
            const sphere = new THREE.Sphere();
            box.getBoundingSphere(sphere);
            const scale = 1 / sphere.radius;
            const offset = sphere.center;
            obj.traverse(o => {
                if (o instanceof THREE.Mesh &&
                    o.geometry instanceof THREE.BufferGeometry) {
                    o.geometry.translate(-offset.x, -offset.y, -offset.z);
                    o.geometry.scale(scale, scale, scale);
                    o.updateMatrix();
                }
            });
            this.cache[url] = { url, obj };
            return obj;
        });
    }
    loadMtl(url) {
        const match = url.match(/^(.*\\)(.*)$/) || url.match(/^(.*\/)(.*)\/?$/);
        if (!match) {
            return Promise.reject(new TypeError('Invalid URL: ' + url));
        }
        const [_, path, basename] = match;
        this.mtlLoader.setPath(path);
        return new Promise((resolve, reject) => {
            this.mtlLoader.load(basename, resolve, undefined, reject);
        });
    }
    loadObj(url) {
        return new Promise((resolve, reject) => {
            this.objLoader.load(url, resolve, undefined, reject);
        });
    }
}
exports.default = ObjLoader;
//# sourceMappingURL=obj-loader.js.map