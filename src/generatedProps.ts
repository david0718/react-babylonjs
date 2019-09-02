import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vector3 as BabylonjsCoreVector3 } from "@babylonjs/core/Maths/math";
import { Matrix as BabylonjsCoreMatrix } from "@babylonjs/core/Maths/math";
import { Space as BabylonjsCoreSpace } from "@babylonjs/core/Maths/math";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { BoundingInfo as BabylonjsCoreBoundingInfo } from "@babylonjs/core/Culling/boundingInfo";
import { IndicesArray as BabylonjsCoreIndicesArray } from "@babylonjs/core/types";
import { FloatArray as BabylonjsCoreFloatArray } from "@babylonjs/core/types";
import { VertexBuffer as BabylonjsCoreVertexBuffer } from "@babylonjs/core/Meshes/buffer";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo } from "@babylonjs/core/Events/keyboardEvents";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { Material as BabylonjsCoreMaterial } from "@babylonjs/core/Materials/material";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { PointerEventTypes as BabylonjsCorePointerEventTypes } from "@babylonjs/core/Events/pointerEvents";
import { PointerInfo as BabylonjsCorePointerInfo } from "@babylonjs/core/Events/pointerEvents";
import { KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";

export class FiberNodeProps {
    addToSceneRootNodes?: any;
    animationPropertiesOverride?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Animations/animationPropertiesOverride").AnimationPropertiesOverride;
    animations?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Animations/animation").Animation[];
    doNotSerialize?: boolean;
    id?: string;
    inspectableCustomProperties?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/iInspectable").IInspectable[];
    metadata?: any;
    name?: string;
    onDispose?: () => void;
    onDisposeObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/node").Node>;
    onReady?: (node: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/node").Node) => void;
    parent?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/node").Node;
    removeFromSceneRootNodes?: any;
    reservedDataStore?: any;
    state?: string;
    uniqueId?: number;
    setEnabled?: any;
}

export class FiberTransformNodeProps extends FiberNodeProps {
    billboardMode?: number;
    ignoreNonUniformScaling?: boolean;
    infiniteDistance?: boolean;
    onAfterWorldMatrixUpdateObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/transformNode").TransformNode>;
    position?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    preserveParentRotationForBillboard?: boolean;
    reIntegrateRotationIntoRotationQuaternion?: boolean;
    rotation?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    rotationQuaternion?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Quaternion;
    scaling?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    scalingDeterminant?: number;
    setAbsolutePosition?: any;
    setDirection?: any;
    setParent?: any;
    setPivotMatrix?: any;
    setPivotPoint?: any;
    setPositionWithLocalVector?: any;
    setPreTransformMatrix?: any;
}

export class FiberAbstractMeshProps extends FiberTransformNodeProps {
    actionManager?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Actions/abstractActionManager").AbstractActionManager;
    alphaIndex?: number;
    alwaysSelectAsActiveMesh?: boolean;
    applyFog?: boolean;
    checkCollisions?: boolean;
    collisionGroup?: number;
    collisionMask?: number;
    computeBonesUsingShaders?: boolean;
    cullingStrategy?: number;
    definedFacingForward?: boolean;
    doNotSyncBoundingInfo?: boolean;
    edgesColor?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Color4;
    edgesWidth?: number;
    ellipsoid?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    ellipsoidOffset?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    enablePointerMoveEvents?: boolean;
    facetDepthSortFrom?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    hasVertexAlpha?: boolean;
    isBlocker?: boolean;
    isPickable?: boolean;
    isVisible?: boolean;
    layerMask?: number;
    material?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/material").Material;
    mustDepthSortFacets?: boolean;
    numBoneInfluencers?: number;
    onCollide?: () => void;
    onCollideObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    onCollisionPositionChange?: () => void;
    onCollisionPositionChangeObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3>;
    onMaterialChangedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    onRebuildObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    outlineColor?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Color3;
    outlineWidth?: number;
    overlayAlpha?: number;
    overlayColor?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Color3;
    partitioningBBoxRatio?: number;
    partitioningSubdivisions?: number;
    receiveShadows?: boolean;
    renderingGroupId?: number;
    scaling?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    showSubMeshesBoundingBox?: boolean;
    skeleton?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Bones/skeleton").Skeleton;
    subMeshes?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/subMesh").SubMesh[];
    useOctreeForCollisions?: boolean;
    useOctreeForPicking?: boolean;
    useOctreeForRenderingSelection?: boolean;
    useVertexColors?: boolean;
    visibility?: number;
    setBoundingInfo?: any;
    setIndices?: any;
    setVerticesData?: any;
}

export class FiberMeshProps extends FiberAbstractMeshProps {
    delayLoadingFile?: string;
    delayLoadState?: number;
    instances?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/instancedMesh").InstancedMesh[];
    isUnIndexed?: boolean;
    morphTargetManager?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Morph/morphTargetManager").MorphTargetManager;
    normalizeSkinFourWeights?: any;
    normalizeSkinWeightsAndExtra?: any;
    onBeforeDraw?: () => void;
    onLODLevelSelection?: (distance: number, mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/mesh").Mesh, selectedLevel: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/mesh").Mesh) => void;
    overrideMaterialSideOrientation?: number;
    overridenInstanceCount?: number;
    setIndices?: any;
    setMaterialByID?: any;
    setVerticesBuffer?: any;
    setVerticesData?: any;
}

export class FiberSceneProps {
    actionManager?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Actions/abstractActionManager").AbstractActionManager;
    activeCamera?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera;
    activeCameras?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera[];
    afterCameraRender?: () => void;
    afterRender?: () => void;
    ambientColor?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Color3;
    animationPropertiesOverride?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Animations/animationPropertiesOverride").AnimationPropertiesOverride;
    animationsEnabled?: boolean;
    animationTimeScale?: number;
    autoClear?: boolean;
    autoClearDepthAndStencil?: boolean;
    beforeCameraRender?: () => void;
    beforeRender?: () => void;
    blockfreeActiveMeshesAndRenderingGroups?: boolean;
    blockMaterialDirtyMechanism?: boolean;
    cameraToUseForPointers?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera;
    clearColor?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Color4;
    clipPlane?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Plane;
    clipPlane2?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Plane;
    clipPlane3?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Plane;
    clipPlane4?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Plane;
    collisionsEnabled?: boolean;
    constantlyUpdateMeshUnderPointer?: boolean;
    customLODSelector?: (mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh, camera: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera) => import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh;
    customRenderTargets?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture").RenderTargetTexture[];
    defaultCursor?: string;
    defaultMaterial?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/material").Material;
    disableOfflineSupportExceptionRules?: RegExp[];
    dispatchAllSubMeshesOfActiveMeshes?: boolean;
    dumpNextRenderTargets?: boolean;
    environmentBRDFTexture?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/Textures/baseTexture").BaseTexture;
    environmentTexture?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/Textures/baseTexture").BaseTexture;
    fogColor?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Color3;
    fogDensity?: number;
    fogEnabled?: boolean;
    fogEnd?: number;
    fogMode?: number;
    fogStart?: number;
    forcePointsCloud?: boolean;
    forceWireframe?: boolean;
    geometriesByUniqueId?: any;
    getActiveMeshCandidates?: () => import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/smartArray").ISmartArrayLike<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    getActiveSubMeshCandidates?: (mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh) => import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/smartArray").ISmartArrayLike<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/subMesh").SubMesh>;
    getCollidingSubMeshCandidates?: (mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh, collider: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Collisions/collider").Collider) => import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/smartArray").ISmartArrayLike<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/subMesh").SubMesh>;
    getDeterministicFrameTime?: () => number;
    getIntersectingSubMeshCandidates?: (mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh, localRay: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Culling/ray").Ray) => import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/smartArray").ISmartArrayLike<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/subMesh").SubMesh>;
    gravity?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Maths/math").Vector3;
    hoverCursor?: string;
    importedMeshesFiles?: String[];
    lensFlaresEnabled?: boolean;
    lightsEnabled?: boolean;
    loadingPluginName?: string;
    metadata?: any;
    offlineProvider?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Offline/IOfflineProvider").IOfflineProvider;
    onActiveCameraChanged?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterActiveMeshesEvaluationObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterAnimationsObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterCameraRenderObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera>;
    onAfterDrawPhaseObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterParticlesRenderingObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterRenderingGroupObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Rendering/renderingManager").RenderingGroupInfo>;
    onAfterRenderObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterRenderTargetsRenderObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onAfterStepObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeActiveMeshesEvaluationObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeAnimationsObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeCameraRenderObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera>;
    onBeforeDrawPhaseObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeParticlesRenderingObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeRenderingGroupObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Rendering/renderingManager").RenderingGroupInfo>;
    onBeforeRenderObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeRenderTargetsRenderObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onBeforeStepObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onCameraRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera>;
    onDataLoadedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onDispose?: () => void;
    onDisposeObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onGeometryRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/geometry").Geometry>;
    onKeyboardObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/keyboardEvents").KeyboardInfo>;
    onLightRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Lights/light").Light>;
    onMaterialRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/material").Material>;
    onMeshImportedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    onMeshRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    onNewCameraAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Cameras/camera").Camera>;
    onNewGeometryAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/geometry").Geometry>;
    onNewLightAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Lights/light").Light>;
    onNewMaterialAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/material").Material>;
    onNewMeshAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh>;
    onNewSkeletonAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Bones/skeleton").Skeleton>;
    onNewTextureAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/Textures/baseTexture").BaseTexture>;
    onNewTransformNodeAddedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/transformNode").TransformNode>;
    onPointerDown?: (evt: PointerEvent, pickInfo: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Collisions/pickingInfo").PickingInfo, type: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/pointerEvents").PointerEventTypes) => void;
    onPointerMove?: (evt: PointerEvent, pickInfo: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Collisions/pickingInfo").PickingInfo, type: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/pointerEvents").PointerEventTypes) => void;
    onPointerObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/pointerEvents").PointerInfo>;
    onPointerPick?: (evt: PointerEvent, pickInfo: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Collisions/pickingInfo").PickingInfo) => void;
    onPointerUp?: (evt: PointerEvent, pickInfo: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Collisions/pickingInfo").PickingInfo, type: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/pointerEvents").PointerEventTypes) => void;
    onPreKeyboardObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/keyboardEvents").KeyboardInfoPre>;
    onPrePointerObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Events/pointerEvents").PointerInfoPre>;
    onReadyObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/scene").Scene>;
    onSkeletonRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Bones/skeleton").Skeleton>;
    onTextureRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Materials/Textures/baseTexture").BaseTexture>;
    onTransformNodeRemovedObservable?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Misc/observable").Observable<import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/transformNode").TransformNode>;
    particlesEnabled?: boolean;
    pointerDownPredicate?: (Mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh) => boolean;
    pointerMovePredicate?: (Mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh) => boolean;
    pointerUpPredicate?: (Mesh: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/Meshes/abstractMesh").AbstractMesh) => boolean;
    pointerX?: number;
    pointerY?: number;
    postProcesses?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/PostProcesses/postProcess").PostProcess[];
    postProcessesEnabled?: boolean;
    postProcessManager?: import("/Users/bz/Github/react-babylonjs/node_modules/@babylonjs/core/PostProcesses/postProcessManager").PostProcessManager;
    preventDefaultOnPointerDown?: boolean;
    preventDefaultOnPointerUp?: boolean;
    probesEnabled?: boolean;
    proceduralTexturesEnabled?: boolean;
    renderTargetsEnabled?: boolean;
    requireLightSorting?: boolean;
    reservedDataStore?: any;
    shadowsEnabled?: boolean;
    skeletonsEnabled?: boolean;
    spritesEnabled?: boolean;
    texturesEnabled?: boolean;
    useConstantAnimationDeltaTime?: boolean;
    useDelayedTextureLoading?: boolean;
    useRightHandedSystem?: boolean;
    setActiveCameraByID?: any;
    setActiveCameraByName?: any;
    setPointerOverMesh?: any;
    setRenderingAutoClearDepthStencil?: any;
    setRenderingOrder?: any;
    setStepId?: any;
    setTransformMatrix?: any;
}
