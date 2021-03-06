import {
    Object3D,
    SphereBufferGeometry,
    MeshStandardMaterial,
    Mesh
} from 'three'

export default class Sphere extends Object3D {
    constructor() {
        super()

        const geometry = new SphereBufferGeometry(0.15, 32, 32);
        const material = new MeshStandardMaterial({
            color: 0x515151
        })
        const mesh = new Mesh(geometry, material)

        this.add(mesh)
    }
}