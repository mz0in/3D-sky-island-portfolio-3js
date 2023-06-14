/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 scene.gltf --transform
Author: TaDavidID (https://sketchfab.com/tadavidid)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/medion-erazer-gaming-room-concept-95a23e8bf1014ddc94434b13588b4f94
Title: Medion Erazer Gaming Room Concept
*/

import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import CameraControls from 'camera-controls';

CameraControls.install({ THREE });

function Controls({ zoom, focus }) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement]
  );

  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  return useFrame((state, delta) => {
    if (zoom) {
      pos.set(focus.x, focus.y, focus.z + 0.002);
      look.set(focus.x, focus.y, focus.z - 0.002);
    } else {
      pos.set(0, 0, 5);
      look.set(0, 0, 4);
    }

    state.camera.position.lerp(pos, 0.5);
    state.camera.updateProjectionMatrix();

    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    return controls.update(delta);
  });
}

export function Model(props) {
  const { nodes, materials } = useGLTF(
    'src/assets/room2/scene-transformed.glb'
  );
  console.log(nodes);

  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.F_2_Mat5_0.geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes['Deckfl��che_1_26_Mat5_0'].geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes['Deckfl��che_2_29_Mat5_0'].geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes['1_11_Mat5_0'].geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes.p_4_Mat5_0.geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes.s_2_Mat5_0.geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes.e_6_Mat5_0.geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes['Deckfl��che_1_109_Mat5_0'].geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes['Deckfl��che_1_112_Mat5_0'].geometry}
        material={materials['Mat.5']}
      />
      <mesh
        geometry={nodes.___Keyboard_Mat_0.geometry}
        material={materials.Keyboard_Mat}
      />
      <mesh
        ref={ref}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={(e) => setFocus(!focus)}
        geometry={nodes.Rahmen_Tshirt_Shade_0.geometry}
        material={materials['Shade.2']}
        position={[-1.38, 1.643, -0.832]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['W��rfel_1_Mat5_0'].geometry}
        material={materials['Mat.5']}
        position={[-1.38, 1.643, -0.834]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['B��hne_5_Mat2_0'].geometry}
        material={materials['Mat.2']}
        position={[-0.84, 2.415, -0.867]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['B��hne_1_2_Brickwall_05_-_Shader_0'].geometry}
        material={materials['Brickwall_05_-_Shader']}
        position={[-0.806, 1.193, -0.886]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['B��hne_3_Carpet_-_Public_Spaces_0'].geometry}
        material={materials.mBody}
        position={[-0.821, 0.081, 0.613]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.branches_Mat3_0.geometry}
        material={materials['Mat.3']}
        position={[1.172, 0.877, -0.668]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.pebble_Mat2_0.geometry}
        material={materials['Mat.2_0']}
        position={[1.172, 0.976, -0.668]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.soil_Mat4_0.geometry}
        material={materials['Mat.4']}
        position={[1.172, 0.977, -0.668]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.plant_Mat_0.geometry}
        material={materials.material}
        position={[1.172, 0.969, -0.668]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.pot_Mat1_0.geometry}
        material={materials.LYR_IKE170009_1}
        position={[1.172, 0.877, -0.668]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.flask_philodendron_Flower_pot_2_0.geometry}
        material={materials.Flower_pot_2}
        position={[1.276, 0.183, 1.979]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.flask_philodendron_Soil2_0.geometry}
        material={materials.Soil2}
        position={[1.276, 0.183, 1.979]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.flask_philodendron_Stone_0.geometry}
        material={materials.Stone}
        position={[1.276, 0.183, 1.979]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.flask_philodendron_flask_philodendron_0.geometry}
        material={materials.flask_philodendron}
        position={[1.276, 0.183, 1.979]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Cactus_1_White_flower_pot_0.geometry}
        material={materials.White_flower_pot}
        position={[0.776, 1.596, -0.788]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Cactus_1_Soil_1_0.geometry}
        material={materials.Soil_1}
        position={[0.776, 1.596, -0.788]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Cactus_1_Areca_palm_0.geometry}
        material={materials.Areca_palm}
        position={[0.776, 1.596, -0.788]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Polygon_Objekt_Orange_flower_pot_0.geometry}
        material={materials.Orange_flower_pot}
        position={[0.903, 1.648, -0.785]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Snake_plant_Snake_plant_0.geometry}
        material={materials.Snake_plant}
        position={[-2.672, 1.669, -0.746]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Orchid_Flower_pot_1_0.geometry}
        material={materials.Flower_pot_1}
        position={[-0.924, 0.176, -0.665]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Orchid_Orchid_0.geometry}
        material={materials.Orchid}
        position={[-0.924, 0.176, -0.665]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Orchid_Orchid_002_0.geometry}
        material={materials.Orchid_002}
        position={[-0.924, 0.176, -0.665]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Orchid_Leaves_0.geometry}
        material={materials.Leaves}
        position={[-0.924, 0.176, -0.665]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Polygon_Objekt_2_metal_0.geometry}
        material={materials.metal}
        position={[-0.685, 0.137, 1.889]}
        rotation={[-Math.PI / 2, 0, 1.466]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Corn_plant_Corn_plant_0.geometry}
        material={materials.Corn_plant}
        position={[-2.98, 0.743, -0.668]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['BOX_Plastic_Black_-_High_Roughness_0'].geometry}
        material={materials['Plastic_Black_-_High_Roughness']}
        position={[-1.146, 0.624, -0.608]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.VENT_BOX_VENT_0.geometry}
        material={materials.BOX_VENT}
        position={[-1.199, 0.887, -0.671]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.GLOW_Mat5_0.geometry}
        material={materials['Mat.5_0']}
        position={[-1.146, 0.624, -0.608]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.LOGOX_LOGOX_0.geometry}
        material={materials.LOGOX}
        position={[-1.081, 0.863, -0.561]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.Nintendo_Switch_OLED_Box_Oled_0.geometry}
        material={materials.Oled}
        position={[0.218, 0.529, -0.582]}
        rotation={[-Math.PI / 2, 0, 1.525]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.Top_Port_Metal_bits_0.geometry}
        material={materials.Metal_bits}
        position={[-2.671, 0.817, -0.736]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Port_internal_Shiny_black_0.geometry}
        material={materials.Shiny_black}
        position={[-2.671, 0.814, -0.736]}
        rotation={[Math.PI, 0.366, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Ending_Shiny_black_0.geometry}
        material={materials.Shiny_black}
        position={[-2.687, 0.816, -0.693]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Front_buttons_logos_Shiny_black_0.geometry}
        material={materials.Shiny_black}
        position={[-2.682, 0.808, -0.706]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.X_Blue_0.geometry}
        material={materials.Blue}
        position={[-2.654, 0.825, -0.713]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.A_Green_0.geometry}
        material={materials.Green}
        position={[-2.649, 0.824, -0.703]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.B_Red_0.geometry}
        material={materials.material_35}
        position={[-2.638, 0.824, -0.707]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Y_Yellow_0.geometry}
        material={materials.Yellow}
        position={[-2.643, 0.824, -0.718]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Xbox_button_Logo_black_1.geometry}
        material={materials.Logo_black}
        position={[-2.672, 0.823, -0.733]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Xbox_button_Shiny_white_0.geometry}
        material={materials.Shiny_white}
        position={[-2.672, 0.823, -0.733]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Left_Analogs_bump_0.geometry}
        material={materials.Analogs}
        position={[-2.706, 0.825, -0.732]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Right_Analogs_bump_0.geometry}
        material={materials.Analogs}
        position={[-2.668, 0.825, -0.698]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Share__0.geometry}
        material={materials.Share__0}
        position={[-2.685, 0.824, -0.724]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Left_4_Dull_white_0.geometry}
        material={materials.Dull_white}
        position={[-2.728, 0.799, -0.719]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.X_top_Front_buttons_transparent_0.geometry}
        material={materials.Front_buttons_transparent}
        position={[-2.683, 0.812, -0.704]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Xbase_Front_button_inserts_0.geometry}
        material={materials.Front_button_inserts}
        position={[-2.683, 0.812, -0.704]}
        rotation={[0, -0.366, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Nintendo_Switch_mBody_0.geometry}
        material={materials.mBody}
        position={[-1.842, 0.641, -0.578]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Shade_Top_White_Painting_0.geometry}
        material={materials.White_Painting}
        position={[1.199, 1.973, -0.769]}
        rotation={[0, 0, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Shade_Bottom__0.geometry}
        material={materials.Share__0}
        position={[1.199, 1.774, -0.769]}
        rotation={[0, 0, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Sweep_Metal_Brushed_0.geometry}
        material={materials.Metal_Brushed}
        position={[1.199, 1.775, -0.897]}
        rotation={[0, 0, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Socket_White_Plastic_0.geometry}
        material={materials.White_Plastic}
        position={[1.199, 1.821, -0.769]}
        rotation={[0, 0, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Base_2_Rubber_0.geometry}
        material={materials.Rubber}
        position={[1.199, 1.563, -0.769]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Body3_Mat_0.geometry}
        material={materials.Mat_0}
        position={[-2.424, 0.651, -0.664]}
        rotation={[0, 0.025, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Body4_191,191,191_0'].geometry}
        material={materials['191191191']}
        position={[-2.424, 0.651, -0.664]}
        rotation={[0, 0.025, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Body1_1_FrontColor_0.geometry}
        material={materials.FrontColor}
        position={[-2.424, 0.651, -0.664]}
        rotation={[0, 0.025, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Zylinder_2_IKE160074_0.geometry}
        material={materials.IKE160074}
        position={[0.007, 1.453, -0.786]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Kopf_2_white_fig_0.geometry}
        material={materials.LYR_IKE170009_1}
        position={[0.007, 1.659, -0.781]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Kopf_3_Mat2_0.geometry}
        material={materials['Mat.2_1']}
        position={[0.007, 1.659, -0.781]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder_014_Material003_0.geometry}
        material={materials['Material.003']}
        position={[1.337, 0.132, 0.198]}
        rotation={[-Math.PI / 2, 0, -1.07]}
        scale={0.105}
      />
      <mesh
        geometry={nodes.Torus_led_atividade_disc_0.geometry}
        material={materials.led_atividade_disc}
        position={[1.337, 0.132, 0.198]}
        rotation={[0, -1.07, 0]}
        scale={0.54}
      />
      <mesh
        geometry={nodes['B��hne_11_Mat5_0'].geometry}
        material={materials['Mat.5']}
        position={[-0.839, 2.363, -0.85]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Fridge_Mat2_0.geometry}
        material={materials['Mat.2_2']}
        position={[1.317, 0.149, -0.437]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.Fridge_Mat4_0.geometry}
        material={materials['Mat.4_0']}
        position={[1.317, 0.149, -0.437]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.806}
      />
      <mesh
        geometry={nodes.Handle_Metal_0.geometry}
        material={materials.Metal}
        position={[-1.156, 0.534, 1.671]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Front_Dalselv_Bed_160-3_0'].geometry}
        material={materials['Dalselv_Bed_160-3']}
        position={[-1.156, 0.534, 1.671]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Bottom_2_Plywood_0.geometry}
        material={materials.Plywood}
        position={[-1.156, 0.495, 1.835]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Back_2_Dalselv_Bed_160-3_0'].geometry}
        material={materials['Dalselv_Bed_160-3']}
        position={[-1.156, 0.534, 2.031]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.bean_chair_hires_Cube_002_Carpet_0.geometry}
        material={materials.Carpet}
        position={[-0.445, 0.142, -0.545]}
        rotation={[0, 0.173, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Scheibe_Carpet_-_Old_Wool_0'].geometry}
        material={materials['Carpet_-_Old_Wool']}
        position={[-1.877, 0.153, 0.667]}
        rotation={[0, -0.726, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Ikea_Lack_Wandregal_2_IKE120047-t1_0'].geometry}
        material={materials['IKE120047-t1']}
        position={[-0.304, 1.36, -0.773]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Shade_4_Shade_0.geometry}
        material={materials.Shade}
        position={[-2.02, 1.608, 1.41]}
        rotation={[Math.PI, 1.25, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Torus_02_white_fig_0.geometry}
        material={materials.LYR_IKE170009_1}
        position={[-2.02, 1.369, 1.41]}
        rotation={[Math.PI, 1.25, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['PolyFaceMesh_Dalselv_Bed_160-3_0'].geometry}
        material={materials['Dalselv_Bed_160-3']}
        position={[-2.067, 0.438, 1.278]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.001}
      />
      <mesh
        geometry={nodes['PolyFaceMesh_3_Dalselv_Bed_160-2_0'].geometry}
        material={materials['Dalselv_Bed_160-2']}
        position={[-2.058, 0.494, 1.893]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Flat_TV_Simple_Mat_1.geometry}
        material={materials.Mat_0}
        position={[-2.157, 0.693, -0.646]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.009, 0.001, 0]}
      />
      <mesh
        geometry={nodes.Flat_TV_Simple_Material35_0.geometry}
        material={materials['Material.35.1']}
        position={[-2.157, 0.693, -0.646]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.009, 0.001, 0]}
      />
      <mesh
        geometry={
          nodes['Flat_TV_Simple_Aluminum_-_Brushed_0��_-_Texture_1'].geometry
        }
        material={materials.Brushed__Metal_01}
        position={[-2.157, 0.693, -0.646]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.009, 0.001, 0]}
      />
      <mesh
        geometry={nodes.PolyFaceMesh_6_IKE160192_1_0.geometry}
        material={materials.IKE160192_1}
        position={[-1.772, 0.39, -0.666]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['������_Mat3_0'].geometry}
        material={materials['Mat.3_0']}
        position={[0.79, 0.592, 1.61]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['���������_1_Mat_0'].geometry}
        material={materials.Mat_1}
        position={[0.79, 0.636, 1.678]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['������_1_3_Mat1_0'].geometry}
        material={materials['Mat.1']}
        position={[0.79, 0.579, 1.61]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Wire_Keyboard_Mat_0.geometry}
        material={materials.Keyboard_Mat}
        position={[1.218, 0.766, 0.87]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Deckfl��che_1_21_Keyboard_Mat_0'].geometry}
        material={materials.Keyboard_Mat}
        position={[1.206, 0.766, 0.861]}
        rotation={[0, -1.48, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Cylinder_4_Mat2_0.geometry}
        material={materials['Mat.2_3']}
        position={[1.197, 0.767, 0.861]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Bottom_Plate_Mat1_0.geometry}
        material={materials['Mat.1_0']}
        position={[1.124, 0.773, 0.85]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.MOUSEMAT_Mat2_0.geometry}
        material={materials['Mat.2_3']}
        position={[1.108, 0.763, 0.911]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Cube_3_Fangabinete_0.geometry}
        material={materials.material_0}
        position={[1.398, 0.778, 1.73]}
        rotation={[Math.PI, -1.458, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.entrada_mic_mic_0.geometry}
        material={materials.material_74}
        position={[1.225, 1.013, 1.725]}
        rotation={[Math.PI / 2, 0, 1.684]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.entrada_fone_fone_0.geometry}
        material={materials.fone}
        position={[1.225, 1.003, 1.725]}
        rotation={[Math.PI / 2, 0, 1.684]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Cube_8_painel__0.geometry}
        material={materials.painel}
        position={[1.225, 1.088, 1.725]}
        rotation={[Math.PI, -1.458, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.USB_Type_A_Female_metal_usb_cap_0.geometry}
        material={materials.usb_cap}
        position={[1.335, 0.989, 1.741]}
        rotation={[Math.PI / 2, 0, 0.113]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.USB_Type_A_Female_connectors_contatos_usb_0.geometry}
        material={materials.contatos_usb}
        position={[1.335, 0.989, 1.741]}
        rotation={[Math.PI / 2, 0, 0.113]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.USB_Type_A_Female_plastic_2_30_usb_0.geometry}
        material={materials['3.0_usb']}
        position={[1.335, 0.979, 1.741]}
        rotation={[Math.PI / 2, 0, 0.113]}
        scale={0.008}
      />
      <mesh
        geometry={nodes['Solid1_191,191,191_1'].geometry}
        material={materials['191191191']}
        position={[1.554, 0.943, 1.059]}
        rotation={[Math.PI, 0.28, Math.PI]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Solid1_Material351_0.geometry}
        material={materials['Material.35.1_0']}
        position={[1.554, 0.943, 1.059]}
        rotation={[Math.PI, 0.28, Math.PI]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Solid1_1_Brushed__Metal_01_0.geometry}
        material={materials.Brushed__Metal_01}
        position={[1.554, 0.943, 1.059]}
        rotation={[Math.PI, 0.28, Math.PI]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Solid1_Instance__1.geometry}
        material={materials.Share__0}
        position={[1.513, 0.943, 0.491]}
        rotation={[Math.PI, -0.283, -Math.PI]}
        scale={0.02}
      />
      <mesh
        geometry={nodes['Rounding_2_Mat_009_0_02_-_Default_0'].geometry}
        material={materials['Material.35.1_0']}
        position={[1.088, 0.769, 1.269]}
        rotation={[-1.586, -0.004, -2.128]}
        scale={0.003}
      />
      <mesh
        geometry={nodes.Rounding_2_Mat_3_0_Mat_0.geometry}
        material={materials.Mat_2}
        position={[1.088, 0.769, 1.269]}
        rotation={[-1.586, -0.004, -2.128]}
        scale={0.003}
      />
      <mesh
        geometry={nodes.Rounding_2_schwarz_glass_001_0_schwarz_glass_0.geometry}
        material={materials.schwarz_glass}
        position={[1.088, 0.769, 1.269]}
        rotation={[-1.586, -0.004, -2.128]}
        scale={0.003}
      />
      <mesh
        geometry={nodes.Rounding_2_Metallic_001_0_Metallic_0.geometry}
        material={materials.Metallic}
        position={[1.088, 0.769, 1.269]}
        rotation={[-1.586, -0.004, -2.128]}
        scale={0.003}
      />
      <mesh
        geometry={nodes.Caster_Wheel_0136_Charcoal_0.geometry}
        material={materials['0136_Charcoal']}
        position={[0.288, 0.215, 1.24]}
        rotation={[0, -0.564, 0]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Caster_Base_Mat5_1.geometry}
        material={materials['Mat.5']}
        position={[0.42, 0.214, 1.032]}
        rotation={[-Math.PI, 1.192, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Caster_Base_0136_Charcoal_0.geometry}
        material={materials['0136_Charcoal']}
        position={[0.42, 0.214, 1.032]}
        rotation={[-Math.PI, 1.192, Math.PI]}
        scale={0.008}
      />
      <mesh
        geometry={nodes.Arm_0136_Charcoal_0.geometry}
        material={materials['0136_Charcoal']}
        position={[0.338, 0.44, 0.826]}
        rotation={[-Math.PI, 1.192, Math.PI]}
        scale={[-0.008, 0.008, 0.008]}
      />
      <mesh
        geometry={nodes.Gruppe_4_Mat5_1.geometry}
        material={materials['Mat.5']}
        position={[0.412, 0.513, 1.275]}
        rotation={[-Math.PI, 1.192, Math.PI]}
        scale={[-0.008, 0.008, 0.008]}
      />

      {focus && <Controls zoom={focus} focus={ref.current.position} />}
    </group>
  );
}

useGLTF.preload('src/assets/room2/scene-transformed.glb');
