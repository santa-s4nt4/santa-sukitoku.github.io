import * as THREE from 'three';
import { IPassModel } from './constants';
export default class ModelLoader {
    private cache;
    private objLoader;
    private mtlLoader;
    private objectLoader;
    private jsonLoader;
    load(model: IPassModel): Promise<THREE.Object3D>;
    private loadJson(model);
    private loadObjAndMtl(model);
    private loadMtl(url);
    private loadObj(url);
    private fixObj(obj);
}
