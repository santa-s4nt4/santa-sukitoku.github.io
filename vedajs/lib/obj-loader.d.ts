import * as THREE from 'three';
import { IPassModel } from './constants';
export default class ObjLoader {
    private cache;
    private loader;
    load(model: IPassModel): Promise<THREE.BufferGeometry>;
    private fixObj(obj);
}
