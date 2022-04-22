export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  scene(oom
    .aBox({
      staticBody: true,
      position: '0 0 0',
      width: '100',
      height: '1',
      depth: '100'
    })
    .aEntity({ navMesh: true, gltfModel: '/scene/test-navmesh.gltf' }))
}
