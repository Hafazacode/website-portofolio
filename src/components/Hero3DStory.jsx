import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ScrambleButton from './ScrambleButton';

// Landasan dasar untuk 3 area 3D
const BASE_PLATFORMS = [
  { x: 0, y: 46, z: 0, w: 424, h: 12, d: 220, cTop: '#22262b', cLeft: '#171a1e', cRight: '#111315', stroke: '#3f4652' },
  { x: 0, y: 58, z: 0, w: 350, h: 12, d: 168, cTop: '#16191d', cLeft: '#111315', cRight: '#0b0c0e', stroke: '#c84b31' },
  { x: -140, y: 37, z: 4, w: 88, h: 6, d: 108, cTop: '#1a1d22', cLeft: '#14171b', cRight: '#0f1114', stroke: '#525866' },
  { x: 0, y: 37, z: 4, w: 176, h: 6, d: 146, cTop: '#262b32', cLeft: '#1b1f24', cRight: '#13161a', stroke: '#646d7a' },
  { x: 140, y: 37, z: 6, w: 96, h: 6, d: 104, cTop: '#242930', cLeft: '#191d22', cRight: '#121519', stroke: '#525866' },
];

// Objek statis di area kiri (gerbang game) & kanan (meja PC)
const SCENE_OBJECTS = [
  { id: 'gate-pillar-l', x: -170, y: 20, z: -42, w: 8, h: 28, d: 8, cTop: '#333942', cLeft: '#23272e', cRight: '#171a1f', stroke: '#646d7a' },
  { id: 'gate-pillar-r', x: -110, y: 20, z: -42, w: 8, h: 28, d: 8, cTop: '#333942', cLeft: '#23272e', cRight: '#171a1f', stroke: '#646d7a' },
  { id: 'gate-top-beam', x: -140, y: 4, z: -42, w: 72, h: 6, d: 10, cTop: '#3d4450', cLeft: '#282d35', cRight: '#1b1f24', stroke: '#c84b31' },

  { id: 'desk-leg-l', layer: 1, x: 102, y: 24, z: 6, w: 6, h: 20, d: 54, cTop: '#1e2227', cLeft: '#16191d', cRight: '#101215', stroke: '#3f4652' },
  { id: 'desk-leg-r', layer: 1, x: 178, y: 24, z: 6, w: 6, h: 20, d: 54, cTop: '#1e2227', cLeft: '#16191d', cRight: '#101215', stroke: '#3f4652' },
  { id: 'desk-top', layer: 2, x: 140, y: 12, z: 6, w: 88, h: 4, d: 62, cTop: '#363c45', cLeft: '#262b32', cRight: '#1a1e23', stroke: '#848b98' },
  { id: 'desk-mat', layer: 3, x: 121, y: 9.7, z: -12, w: 44, h: 0.6, d: 14, cTop: '#1e232a', cLeft: '#15191e', cRight: '#101317', stroke: '#525866' },
  { id: 'mon-neck', layer: 4, x: 121, y: 1, z: 14, w: 5, h: 14, d: 4, cTop: '#262b32', cLeft: '#1a1d22', cRight: '#121418', stroke: '#525866' },
  { id: 'mon-base', layer: 4, x: 121, y: 9, z: 12, w: 18, h: 2, d: 10, cTop: '#262b32', cLeft: '#1a1d22', cRight: '#121418', stroke: '#525866' },
  { id: 'mon-screen', layer: 4, x: 121, y: -11, z: 10, w: 40, h: 26, d: 4, cTop: '#2d333b', cLeft: '#14171b', cRight: '#101215', stroke: '#848b98' },
  { id: 'pc-case', layer: 4, x: 170, y: -4, z: 7, w: 17, h: 28, d: 32, cTop: '#262b32', cLeft: '#191d23', cRight: '#12151a', stroke: '#c84b31' },
  { id: 'speaker-l', layer: 5, x: 99, y: 6, z: -2, w: 6, h: 8, d: 6, cTop: '#2d333b', cLeft: '#1c2026', cRight: '#12151a', stroke: '#c84b31' },
  { id: 'speaker-r', layer: 5, x: 143, y: 6, z: -2, w: 6, h: 8, d: 6, cTop: '#2d333b', cLeft: '#1c2026', cRight: '#12151a', stroke: '#c84b31' },
  { id: 'keyboard', layer: 6, x: 115, y: 8.5, z: -12, w: 24, h: 1.8, d: 9, cTop: '#EAE8E1', cLeft: '#9ca3af', cRight: '#646d7a', stroke: '#3f4652' },
  { id: 'mouse', layer: 6, x: 135, y: 8.5, z: -12, w: 5.5, h: 1.8, d: 7.5, cTop: '#EAE8E1', cLeft: '#9ca3af', cRight: '#646d7a', stroke: '#3f4652' },
];

// Posisi 3 jalur & rintangan buat animasi game di kiri
const RUNNER_LANES = [-158, -140, -122];

const RUNNER_SPAWNS = [
  { lane: 1, offset: 0.0, type: 'block' },
  { lane: 0, offset: 0.25, type: 'hurdle' },
  { lane: 2, offset: 0.5, type: 'block' },
  { lane: 1, offset: 0.75, type: 'gem' },
];

// Daftar node untuk topologi jaringan di area tengah
const CISCO_NODES_3D = [
  { id: 'srv-pt', type: 'server-pt', x: 0, y: -55, z: -46, w: 9, h: 14, d: 8, label: 'Server-PT', sub: 'ServerPT' },
  { id: 'rtr-isp', type: 'router', x: 0, y: -33, z: -31, w: 15, h: 7, d: 15, radius: 7.5, height: 6.5, label: '2911', sub: 'Router Isp' },
  { id: 'rtr-kantor', type: 'router', x: 0, y: -12, z: -16, w: 15, h: 7, d: 15, radius: 7.5, height: 6.5, label: '2911', sub: 'Router Kantor' },
  { id: 'sw-core', type: 'switch', x: 0, y: 7, z: -1, w: 17, h: 5, d: 11, label: '2960-24TT', sub: 'Core Switch' },

  // switch tiap divisi VLAN
  {
    id: 'sw-hrd',
    type: 'switch',
    x: -64,
    y: 17,
    z: 10,
    w: 15,
    h: 4.5,
    d: 10,
    label: '2960-24TT',
    sub: 'HRD',
    vlanTitle: 'VLAN 10',
    vlanSub: '192.168.10.0/27',
  },
  {
    id: 'sw-it',
    type: 'switch',
    x: -22,
    y: 21,
    z: 18,
    w: 15,
    h: 4.5,
    d: 10,
    label: '2960-24TT',
    sub: 'IT Support',
    vlanTitle: 'VLAN 20',
    vlanSub: '192.168.20.0/27',
  },
  {
    id: 'sw-fin',
    type: 'switch',
    x: 22,
    y: 21,
    z: 18,
    w: 15,
    h: 4.5,
    d: 10,
    label: '2960-24TT',
    sub: 'Finance',
    vlanTitle: 'VLAN 30',
    vlanSub: '192.168.30.0/27',
  },
  {
    id: 'sw-srv',
    type: 'switch',
    x: 64,
    y: 17,
    z: 10,
    w: 15,
    h: 4.5,
    d: 10,
    label: '2960-24TT',
    sub: 'Server',
    vlanTitle: 'VLAN 40',
    vlanSub: '192.168.40.0/28',
  },

  // perangkat di tiap VLAN
  { id: 'hrd-pc1', type: 'pc', x: -80, y: 30, z: 28, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC 1' },
  { id: 'hrd-pc6', type: 'pc', x: -67, y: 31, z: 38, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC 2' },
  { id: 'hrd-lap1', type: 'laptop', x: -53, y: 31, z: 36, w: 7, h: 5, d: 6, label: 'Laptop-PT', sub: 'Laptop1' },

  { id: 'it-pc2', type: 'pc', x: -37, y: 31, z: 35, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC2' },
  { id: 'it-pc3', type: 'pc', x: -27, y: 32, z: 43, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC3' },
  { id: 'it-pc5', type: 'pc', x: -18, y: 33, z: 52, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC5' },
  { id: 'it-pc4', type: 'pc', x: -9, y: 32, z: 41, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC4' },

  { id: 'fin-pc0', type: 'pc', x: 9, y: 32, z: 41, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC6' },
  { id: 'fin-prn0', type: 'printer', x: 18, y: 33, z: 52, w: 8, h: 5, d: 6, label: 'Printer-PT', sub: 'Printer0' },
  { id: 'fin-lap0', type: 'laptop', x: 27, y: 32, z: 43, w: 7, h: 5, d: 6, label: 'Laptop-PT', sub: 'Laptop0' },
  { id: 'fin-pc1', type: 'pc', x: 37, y: 31, z: 35, w: 7, h: 6, d: 6, label: 'PC-PT', sub: 'PC7' },

  { id: 'srv-dns', type: 'server-pt', x: 56, y: 28, z: 36, w: 8, h: 13, d: 8, label: 'Server-PT', sub: 'DNS' },
  { id: 'srv-dhcp', type: 'server-pt', x: 73, y: 28, z: 36, w: 8, h: 13, d: 8, label: 'Server-PT', sub: 'DHCP' },
];

const NODE_MAP = Object.fromEntries(CISCO_NODES_3D.map((n) => [n.id, n]));

// Sambungan kabel antar perangkat
const CISCO_LINKS_3D = [
  { from: 'srv-pt', to: 'rtr-isp', startPort: 'triangle', endPort: 'triangle' },
  { from: 'rtr-isp', to: 'rtr-kantor', startPort: 'triangle', endPort: 'triangle' },
  { from: 'rtr-kantor', to: 'sw-core', startPort: 'triangle', endPort: 'orange' },

  { from: 'sw-core', to: 'sw-hrd', startPort: 'orange', endPort: 'orange' },
  { from: 'sw-core', to: 'sw-it', startPort: 'orange', endPort: 'orange' },
  { from: 'sw-core', to: 'sw-fin', startPort: 'orange', endPort: 'orange' },
  { from: 'sw-core', to: 'sw-srv', startPort: 'orange', endPort: 'orange' },

  { from: 'sw-hrd', to: 'hrd-pc1', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-hrd', to: 'hrd-pc6', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-hrd', to: 'hrd-lap1', startPort: 'orange', endPort: 'triangle' },

  { from: 'sw-it', to: 'it-pc2', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-it', to: 'it-pc3', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-it', to: 'it-pc5', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-it', to: 'it-pc4', startPort: 'orange', endPort: 'triangle' },

  { from: 'sw-fin', to: 'fin-pc0', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-fin', to: 'fin-prn0', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-fin', to: 'fin-lap0', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-fin', to: 'fin-pc1', startPort: 'orange', endPort: 'triangle' },

  { from: 'sw-srv', to: 'srv-dns', startPort: 'orange', endPort: 'triangle' },
  { from: 'sw-srv', to: 'srv-dhcp', startPort: 'orange', endPort: 'triangle' },
];

const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const seg = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Ubah koordinat 3D ke titik layar 2D
function project3D(wx, wy, wz, cam, cw, ch) {
  const rx = wx - cam.x;
  const ry = wy - cam.y;
  const rz = wz - cam.z;
  const cosY = Math.cos(cam.yaw);
  const sinY = Math.sin(cam.yaw);
  const x1 = rx * cosY - rz * sinY;
  const z1 = rz * cosY + rx * sinY;
  const cosP = Math.cos(cam.pitch);
  const sinP = Math.sin(cam.pitch);
  const y2 = ry * cosP - z1 * sinP;
  const z2 = z1 * cosP + ry * sinP;
  const depth = Math.max(40, z2);

  const effectiveSpan = Math.min(cw * 1.12, ch * 1.02);
  const f = cam.fov * (effectiveSpan / 900);
  const centerY = cam.centerYRatio ? ch * cam.centerYRatio : ch * 0.58;

  return {
    x: cw * 0.5 + (x1 * f) / depth,
    y: centerY + (y2 * f) / depth,
    depth,
    scale: f / depth,
  };
}

function drawIsoBox(g, box, cam, cw, ch, dpr) {
  const hw = box.w / 2;
  const hh = box.h / 2;
  const hd = box.d / 2;
  const v = [
    project3D(box.x - hw, box.y - hh, box.z - hd, cam, cw, ch),
    project3D(box.x + hw, box.y - hh, box.z - hd, cam, cw, ch),
    project3D(box.x + hw, box.y - hh, box.z + hd, cam, cw, ch),
    project3D(box.x - hw, box.y - hh, box.z + hd, cam, cw, ch),
    project3D(box.x - hw, box.y + hh, box.z - hd, cam, cw, ch),
    project3D(box.x + hw, box.y + hh, box.z - hd, cam, cw, ch),
    project3D(box.x + hw, box.y + hh, box.z + hd, cam, cw, ch),
    project3D(box.x - hw, box.y + hh, box.z + hd, cam, cw, ch),
  ];

  g.lineWidth = Math.max(0.75, 1.0 * dpr);
  g.strokeStyle = box.stroke || '#3f4652';

  g.fillStyle = box.cLeft;
  g.beginPath();
  g.moveTo(v[0].x, v[0].y);
  g.lineTo(v[1].x, v[1].y);
  g.lineTo(v[5].x, v[5].y);
  g.lineTo(v[4].x, v[4].y);
  g.closePath();
  g.fill();
  g.stroke();

  if (v[2].x > v[1].x) {
    g.fillStyle = box.cRight;
    g.beginPath();
    g.moveTo(v[1].x, v[1].y);
    g.lineTo(v[2].x, v[2].y);
    g.lineTo(v[6].x, v[6].y);
    g.lineTo(v[5].x, v[5].y);
    g.closePath();
    g.fill();
    g.stroke();
  } else if (v[3].x < v[0].x) {
    g.fillStyle = box.cRight;
    g.beginPath();
    g.moveTo(v[0].x, v[0].y);
    g.lineTo(v[3].x, v[3].y);
    g.lineTo(v[7].x, v[7].y);
    g.lineTo(v[4].x, v[4].y);
    g.closePath();
    g.fill();
    g.stroke();
  }

  if (v[0].y > v[3].y - 2) {
    g.fillStyle = box.cTop;
    g.beginPath();
    g.moveTo(v[0].x, v[0].y);
    g.lineTo(v[1].x, v[1].y);
    g.lineTo(v[2].x, v[2].y);
    g.lineTo(v[3].x, v[3].y);
    g.closePath();
    g.fill();
    g.stroke();
  }
}

// Fungsi-fungsi buat gambar perangkat jaringan Cisco 3D
function drawCiscoRouterCylinder(g, rx, ry, rz, radius, height, cam, cw, ch, dpr) {
  const segs = 12;
  const topPts = [];
  const botPts = [];
  const yTop = ry - height / 2;
  const yBot = ry + height / 2;

  for (let i = 0; i < segs; i++) {
    const ang = (i / segs) * Math.PI * 2;
    const px = rx + Math.cos(ang) * radius;
    const pz = rz + Math.sin(ang) * radius;
    topPts.push(project3D(px, yTop, pz, cam, cw, ch));
    botPts.push(project3D(px, yBot, pz, cam, cw, ch));
  }

  g.lineWidth = Math.max(0.7, 0.9 * dpr);
  for (let i = 0; i < segs; i++) {
    const next = (i + 1) % segs;
    if (topPts[i].x > topPts[next].x - 30) {
      g.fillStyle = i % 2 === 0 ? '#366f87' : '#28566b';
      g.strokeStyle = '#193847';
      g.beginPath();
      g.moveTo(topPts[i].x, topPts[i].y);
      g.lineTo(topPts[next].x, topPts[next].y);
      g.lineTo(botPts[next].x, botPts[next].y);
      g.lineTo(botPts[i].x, botPts[i].y);
      g.closePath();
      g.fill();
      g.stroke();
    }
  }

  g.fillStyle = '#5394af';
  g.strokeStyle = '#111315';
  g.lineWidth = Math.max(0.9, 1.15 * dpr);
  g.beginPath();
  topPts.forEach((pt, idx) => {
    if (idx === 0) g.moveTo(pt.x, pt.y);
    else g.lineTo(pt.x, pt.y);
  });
  g.closePath();
  g.fill();
  g.stroke();

  g.strokeStyle = '#F6F5F2';
  g.lineWidth = Math.max(0.9, 1.25 * dpr);
  const axes = [
    { dx: 1, dz: 0, inward: true },
    { dx: -1, dz: 0, inward: true },
    { dx: 0, dz: 1, inward: false },
    { dx: 0, dz: -1, inward: false },
  ];
  axes.forEach(({ dx, dz, inward }) => {
    const pInner = project3D(rx + dx * 1.4, yTop - 0.2, rz + dz * 1.4, cam, cw, ch);
    const pOuter = project3D(rx + dx * (radius * 0.75), yTop - 0.2, rz + dz * (radius * 0.75), cam, cw, ch);
    g.beginPath();
    g.moveTo(pInner.x, pInner.y);
    g.lineTo(pOuter.x, pOuter.y);
    g.stroke();

    const tip = inward ? pInner : pOuter;
    const s = Math.max(1.5, 2.0 * tip.scale);
    g.fillStyle = '#F6F5F2';
    g.fillRect(tip.x - s / 2, tip.y - s / 2, s, s);
  });
}

function drawCiscoSwitchNode(g, node, cam, cw, ch, dpr) {
  drawIsoBox(
    g,
    {
      ...node,
      cTop: '#5697b2',
      cLeft: '#356d85',
      cRight: '#244e61',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );

  const topY = node.y - node.h / 2 - 0.2;
  const halfSpan = node.w * 0.34;
  [-1.4, 1.4].forEach((zOff, i) => {
    const a1 = project3D(node.x - halfSpan, topY, node.z + zOff, cam, cw, ch);
    const a2 = project3D(node.x + halfSpan, topY, node.z + zOff, cam, cw, ch);
    g.strokeStyle = '#F6F5F2';
    g.lineWidth = Math.max(0.85, 1.15 * dpr);
    g.beginPath();
    g.moveTo(a1.x, a1.y);
    g.lineTo(a2.x, a2.y);
    g.stroke();

    const tip = i === 0 ? a2 : a1;
    const s = Math.max(1.4, 1.9 * tip.scale);
    g.fillStyle = '#F6F5F2';
    g.fillRect(tip.x - s / 2, tip.y - s / 2, s, s);
  });
}

function drawCiscoServerPTNode(g, node, cam, cw, ch, dpr) {
  drawIsoBox(
    g,
    {
      ...node,
      cTop: '#5394af',
      cLeft: '#376f87',
      cRight: '#244e61',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );

  const frontZ = node.z - node.d / 2 - 0.2;
  [-3, -0.5].forEach((yOff) => {
    const p1 = project3D(node.x - node.w * 0.3, node.y + yOff, frontZ, cam, cw, ch);
    const p2 = project3D(node.x + node.w * 0.3, node.y + yOff, frontZ, cam, cw, ch);
    g.strokeStyle = '#d8e8ef';
    g.lineWidth = Math.max(0.8, 1 * dpr);
    g.beginPath();
    g.moveTo(p1.x, p1.y);
    g.lineTo(p2.x, p2.y);
    g.stroke();
  });
}

function drawCiscoPcNode(g, node, cam, cw, ch, dpr) {
  drawIsoBox(
    g,
    {
      x: node.x,
      y: node.y + 2.2,
      z: node.z,
      w: node.w,
      h: 2.0,
      d: node.d,
      cTop: '#6aa4bc',
      cLeft: '#3d768e',
      cRight: '#285366',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );
  drawIsoBox(
    g,
    {
      x: node.x,
      y: node.y - 1.2,
      z: node.z - 0.5,
      w: node.w * 0.86,
      h: 4.6,
      d: 3.2,
      cTop: '#6aa4bc',
      cLeft: '#3d768e',
      cRight: '#285366',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );
  const scrZ = node.z - 2.3;
  const s1 = project3D(node.x - 2.1, node.y - 2.6, scrZ, cam, cw, ch);
  const s2 = project3D(node.x + 2.1, node.y - 2.6, scrZ, cam, cw, ch);
  const s3 = project3D(node.x + 2.1, node.y + 0.1, scrZ, cam, cw, ch);
  const s4 = project3D(node.x - 2.1, node.y + 0.1, scrZ, cam, cw, ch);
  drawQuad3D(g, s1, s2, s3, s4, '#d9f2fa', '#111315', 0.8);
}

function drawCiscoLaptopNode(g, node, cam, cw, ch, dpr) {
  drawIsoBox(
    g,
    {
      x: node.x,
      y: node.y + 1.8,
      z: node.z + 0.8,
      w: node.w,
      h: 1.4,
      d: node.d,
      cTop: '#6aa4bc',
      cLeft: '#356a80',
      cRight: '#244b5c',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );
  drawIsoBox(
    g,
    {
      x: node.x,
      y: node.y - 0.8,
      z: node.z - 1.6,
      w: node.w * 0.92,
      h: 4.2,
      d: 1.5,
      cTop: '#6aa4bc',
      cLeft: '#3d768e',
      cRight: '#244b5c',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );
}

function drawCiscoPrinterNode(g, node, cam, cw, ch, dpr) {
  drawIsoBox(
    g,
    {
      x: node.x,
      y: node.y + 0.8,
      z: node.z,
      w: node.w,
      h: 3.8,
      d: node.d,
      cTop: '#5697b2',
      cLeft: '#356d85',
      cRight: '#244e61',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );
  drawIsoBox(
    g,
    {
      x: node.x,
      y: node.y - 1.8,
      z: node.z - 0.5,
      w: node.w * 0.55,
      h: 2.2,
      d: 1.2,
      cTop: '#FFFFFF',
      cLeft: '#F6F5F2',
      cRight: '#d8d5cd',
      stroke: '#111315',
    },
    cam,
    cw,
    ch,
    dpr
  );
}

function drawCiscoPortIndicator(g, pStart, pEnd, ratio, type, dpr) {
  const px = pStart.x + (pEnd.x - pStart.x) * ratio;
  const py = pStart.y + (pEnd.y - pStart.y) * ratio;

  if (type === 'orange') {
    const r = Math.max(2.2, 3.1 * dpr);
    g.fillStyle = '#ea580c';
    g.strokeStyle = '#111315';
    g.lineWidth = 0.9;
    g.beginPath();
    g.arc(px, py, r, 0, Math.PI * 2);
    g.fill();
    g.stroke();
  } else if (type === 'triangle') {
    const s = Math.max(3.4, 4.4 * dpr);
    g.fillStyle = '#22c55e';
    g.strokeStyle = '#111315';
    g.lineWidth = 0.85;
    g.beginPath();
    g.moveTo(px, py - s);
    g.lineTo(px - s * 0.82, py + s * 0.72);
    g.lineTo(px + s * 0.82, py + s * 0.72);
    g.closePath();
    g.fill();
    g.stroke();
  }
}

function drawQuad3D(g, p1, p2, p3, p4, fill, stroke, lineWidth = 1) {
  g.beginPath();
  g.moveTo(p1.x, p1.y);
  g.lineTo(p2.x, p2.y);
  g.lineTo(p3.x, p3.y);
  g.lineTo(p4.x, p4.y);
  g.closePath();
  if (fill) {
    g.fillStyle = fill;
    g.fill();
  }
  if (stroke) {
    g.strokeStyle = stroke;
    g.lineWidth = lineWidth;
    g.stroke();
  }
}

// Bubble daftar tech stack melayang di atas meja PC
function drawVSCodeStackFloatingGUI(g, cam, cw, ch, dpr, isMobile, now) {
  const floatY = Math.sin(now * 0.0028) * 1.4;
  const anchor = project3D(144, (isMobile ? -26 : -29) + floatY, 4, cam, cw, ch);
  const rigTop = project3D(170, -18, 7, cam, cw, ch);
  const monTop = project3D(121, -24, 10, cam, cw, ch);

  const cols = isMobile ? 3 : 6;
  const rows = isMobile ? 2 : 1;
  const guiW = (isMobile ? 86 : 216) * dpr;
  const guiH = (isMobile ? 44 : 50) * dpr;
  const edgeMargin = 6 * dpr;
  const gx = clamp(anchor.x - guiW / 2, edgeMargin, cw - guiW - edgeMargin);
  const gy = anchor.y - guiH;
  const tailX = clamp(anchor.x, gx + 10 * dpr, gx + guiW - 10 * dpr);

  g.save();
  g.strokeStyle = 'rgba(132, 139, 152, 0.45)';
  g.lineWidth = Math.max(0.9, 1.1 * dpr);
  g.setLineDash([2.5 * dpr, 2.5 * dpr]);
  g.beginPath();
  g.moveTo(rigTop.x, rigTop.y);
  g.lineTo(gx + guiW * 0.72, gy + guiH);
  g.moveTo(monTop.x, monTop.y);
  g.lineTo(gx + guiW * 0.32, gy + guiH);
  g.stroke();
  g.setLineDash([]);

  g.fillStyle = 'rgba(20, 23, 28, 0.94)';
  g.strokeStyle = '#646d7a';
  g.lineWidth = Math.max(1, 1.25 * dpr);
  g.beginPath();
  if (g.roundRect) {
    g.roundRect(gx, gy, guiW, guiH, (isMobile ? 5 : 7) * dpr);
  } else {
    g.rect(gx, gy, guiW, guiH);
  }
  g.fill();
  g.stroke();

  const tailW = (isMobile ? 4.5 : 6) * dpr;
  const tailH = (isMobile ? 4.2 : 5.5) * dpr;
  g.fillStyle = 'rgba(20, 23, 28, 0.94)';
  g.beginPath();
  g.moveTo(tailX - tailW, gy + guiH - 1);
  g.lineTo(tailX, gy + guiH + tailH);
  g.lineTo(tailX + tailW, gy + guiH - 1);
  g.closePath();
  g.fill();

  g.strokeStyle = '#646d7a';
  g.beginPath();
  g.moveTo(tailX - tailW, gy + guiH);
  g.lineTo(tailX, gy + guiH + tailH);
  g.lineTo(tailX + tailW, gy + guiH);
  g.stroke();

  const stackItems = [
    { id: 'react', label: isMobile ? 'React' : 'React.js', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.12)' },
    { id: 'html', label: 'HTML5', color: '#E34F26', bg: 'rgba(227, 79, 38, 0.14)' },
    { id: 'css', label: 'CSS3', color: '#264DE4', bg: 'rgba(38, 77, 228, 0.16)' },
    { id: 'mysql', label: 'MySQL', color: '#00758F', bg: 'rgba(0, 117, 143, 0.16)' },
    { id: 'node', label: isMobile ? 'Node' : 'Node.js', color: '#539E43', bg: 'rgba(83, 158, 67, 0.15)' },
    { id: 'godot', label: 'Godot', color: '#478CBF', bg: 'rgba(71, 140, 191, 0.16)' },
  ];

  const padX = (isMobile ? 3.2 : 6.5) * dpr;
  const padY = (isMobile ? 3.0 : 5.5) * dpr;
  const areaX = gx + padX;
  const areaW = guiW - padX * 2;
  const areaH = guiH - padY * 2;
  const gapX = (isMobile ? 2.2 : 4) * dpr;
  const gapY = (isMobile ? 2.2 : 0) * dpr;
  const cardW = (areaW - gapX * (cols - 1)) / cols;
  const cardH = (areaH - gapY * (rows - 1)) / rows;

  stackItems.forEach((item, idx) => {
    const colIdx = idx % cols;
    const rowIdx = Math.floor(idx / cols);
    const cx = areaX + colIdx * (cardW + gapX);
    const cy = gy + padY + rowIdx * (cardH + gapY);

    g.fillStyle = item.bg;
    g.strokeStyle = item.color;
    g.lineWidth = Math.max(0.7, 1.0 * dpr);
    g.beginPath();
    if (g.roundRect) {
      g.roundRect(cx, cy, cardW, cardH, (isMobile ? 2.5 : 4) * dpr);
    } else {
      g.rect(cx, cy, cardW, cardH);
    }
    g.fill();
    g.stroke();

    const iconCenterX = cx + cardW / 2;
    const iconCenterY = cy + cardH * (isMobile ? 0.38 : 0.4);
    const r = (isMobile ? 3.3 : 6.5) * dpr;

    if (item.id === 'react') {
      g.strokeStyle = '#61DAFB';
      g.lineWidth = Math.max(0.75, 1.0 * dpr);
      [0, Math.PI / 3, -Math.PI / 3].forEach((rot) => {
        g.beginPath();
        g.ellipse(iconCenterX, iconCenterY, r, r * 0.42, rot, 0, Math.PI * 2);
        g.stroke();
      });
      g.fillStyle = '#61DAFB';
      g.beginPath();
      g.arc(iconCenterX, iconCenterY, r * 0.22, 0, Math.PI * 2);
      g.fill();
    } else if (item.id === 'html') {
      g.fillStyle = '#E34F26';
      g.beginPath();
      g.moveTo(iconCenterX - r * 0.75, iconCenterY - r * 0.8);
      g.lineTo(iconCenterX + r * 0.75, iconCenterY - r * 0.8);
      g.lineTo(iconCenterX + r * 0.6, iconCenterY + r * 0.55);
      g.lineTo(iconCenterX, iconCenterY + r * 0.9);
      g.lineTo(iconCenterX - r * 0.6, iconCenterY + r * 0.55);
      g.closePath();
      g.fill();
      g.fillStyle = '#FFFFFF';
      g.font = `800 ${Math.round((isMobile ? 4.6 : 7.0) * dpr)}px "Plus Jakarta Sans", sans-serif`;
      g.textAlign = 'center';
      g.fillText('5', iconCenterX, iconCenterY + r * 0.35);
    } else if (item.id === 'css') {
      g.fillStyle = '#264DE4';
      g.beginPath();
      g.moveTo(iconCenterX - r * 0.75, iconCenterY - r * 0.8);
      g.lineTo(iconCenterX + r * 0.75, iconCenterY - r * 0.8);
      g.lineTo(iconCenterX + r * 0.6, iconCenterY + r * 0.55);
      g.lineTo(iconCenterX, iconCenterY + r * 0.9);
      g.lineTo(iconCenterX - r * 0.6, iconCenterY + r * 0.55);
      g.closePath();
      g.fill();
      g.fillStyle = '#FFFFFF';
      g.font = `800 ${Math.round((isMobile ? 4.6 : 7.0) * dpr)}px "Plus Jakarta Sans", sans-serif`;
      g.textAlign = 'center';
      g.fillText('3', iconCenterX, iconCenterY + r * 0.35);
    } else if (item.id === 'mysql') {
      const dbW = r * 0.78;
      const dbH = r * 0.32;
      [-r * 0.42, 0, r * 0.42].forEach((yOff, layerIdx) => {
        g.fillStyle = layerIdx === 0 ? '#F29111' : '#00758F';
        g.strokeStyle = '#e0f2fe';
        g.lineWidth = Math.max(0.65, 0.85 * dpr);
        g.beginPath();
        g.ellipse(iconCenterX, iconCenterY + yOff, dbW, dbH, 0, 0, Math.PI * 2);
        g.fill();
        g.stroke();
      });
    } else if (item.id === 'node') {
      g.fillStyle = '#539E43';
      g.beginPath();
      for (let s = 0; s < 6; s++) {
        const ang = (s / 6) * Math.PI * 2 - Math.PI / 2;
        const px = iconCenterX + Math.cos(ang) * (r * 0.88);
        const py = iconCenterY + Math.sin(ang) * (r * 0.88);
        if (s === 0) g.moveTo(px, py);
        else g.lineTo(px, py);
      }
      g.closePath();
      g.fill();
      g.fillStyle = '#FFFFFF';
      g.font = `800 ${Math.round((isMobile ? 4.0 : 5.8) * dpr)}px "Plus Jakarta Sans", sans-serif`;
      g.textAlign = 'center';
      g.fillText('JS', iconCenterX, iconCenterY + r * 0.3);
    } else if (item.id === 'godot') {
      g.fillStyle = '#478CBF';
      [-r * 0.58, 0, r * 0.58].forEach((gxOff, gIdx) => {
        const gw = r * 0.34;
        const gh = r * 0.36;
        const gyTop = iconCenterY - r * (gIdx === 1 ? 0.96 : 0.82);
        g.fillRect(iconCenterX + gxOff - gw / 2, gyTop, gw, gh);
      });
      g.beginPath();
      if (g.roundRect) {
        g.roundRect(iconCenterX - r * 0.82, iconCenterY - r * 0.58, r * 1.64, r * 1.32, 2.5 * dpr);
      } else {
        g.rect(iconCenterX - r * 0.82, iconCenterY - r * 0.58, r * 1.64, r * 1.32);
      }
      g.fill();
      [-r * 0.38, r * 0.38].forEach((exOff) => {
        g.fillStyle = '#FFFFFF';
        g.beginPath();
        g.arc(iconCenterX + exOff, iconCenterY - r * 0.05, r * 0.24, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#14171c';
        g.beginPath();
        g.arc(iconCenterX + exOff, iconCenterY - r * 0.05, r * 0.1, 0, Math.PI * 2);
        g.fill();
      });
      g.strokeStyle = '#FFFFFF';
      g.lineWidth = Math.max(0.75, 1.0 * dpr);
      g.beginPath();
      g.moveTo(iconCenterX - r * 0.48, iconCenterY + r * 0.42);
      g.lineTo(iconCenterX + r * 0.48, iconCenterY + r * 0.42);
      g.stroke();
    }

    g.fillStyle = '#F6F5F2';
    g.font = `700 ${Math.round((isMobile ? 4.2 : 6.2) * dpr)}px "Plus Jakarta Sans", sans-serif`;
    g.textAlign = 'center';
    g.fillText(item.label, iconCenterX, cy + cardH - (isMobile ? 2.5 : 4.2) * dpr);
  });

  g.restore();
}

export default function Hero3DStory() {
  const { profileData, heroPinsData, t, lang } = useLanguage();
  const storyRef = useRef(null);
  const canvasRef = useRef(null);
  const layer0Ref = useRef(null);
  const layer2Ref = useRef(null);
  const heroCardRef = useRef(null);
  const progBarRef = useRef(null);
  const pinRefs = useRef([]);
  const langRef = useRef(lang);

  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  useEffect(() => {
    const story = storyRef.current;
    const cv = canvasRef.current;
    if (!story || !cv) return;
    const ctx = cv.getContext('2d');

    let dpr = 1;
    const sizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      cv.width = Math.round(cv.clientWidth * dpr);
      cv.height = Math.round(cv.clientHeight * dpr);
    };

    const renderThreeZoneDiorama = (vp, sx, sy, sp, now) => {
      const cw = cv.width;
      const ch = cv.height;
      const cssWidth = cw / dpr;
      const isMobile = cssWidth < 768;
      ctx.clearRect(0, 0, cw, ch);

      const cam = {
        x: sx * (isMobile ? 10 : 22),
        y: -46 + vp * (isMobile ? 8 : 14) + sy * 10,
        z: isMobile ? -545 + vp * 110 : -435 + vp * 185,
        yaw: -0.11 * (1 - vp) + sx * 0.06,
        pitch: 0.25 * (1 - vp * 0.35) + sy * 0.04,
        fov: 900,
        centerYRatio: isMobile ? 0.49 - vp * 0.06 : 0.6,
      };

      // latar belakang & grid tipis
      ctx.fillStyle = '#EAE8E1';
      ctx.fillRect(0, 0, cw, ch);

      ctx.strokeStyle = 'rgba(17, 19, 21, 0.045)';
      ctx.lineWidth = 1;
      const step = Math.round((isMobile ? 48 : 72) * dpr);
      for (let x = 0; x < cw; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, ch);
        ctx.stroke();
      }
      for (let y = 0; y < ch; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(cw, y);
        ctx.stroke();
      }

      BASE_PLATFORMS.forEach((plat) => drawIsoBox(ctx, plat, cam, cw, ch, dpr));

      // area kiri: simulasi lintasan endless runner
      const trackLeftX = -167;
      const trackRightX = -113;
      const trackBackZ = -40;
      const trackFrontZ = 48;
      const floorY = 33.8;

      [-167, -149, -131, -113].forEach((lx, idx) => {
        const pStart = project3D(lx, floorY, trackBackZ, cam, cw, ch);
        const pEnd = project3D(lx, floorY, trackFrontZ, cam, cw, ch);
        ctx.strokeStyle = idx === 0 || idx === 3 ? '#646d7a' : 'rgba(246, 245, 242, 0.22)';
        ctx.lineWidth = Math.max(1, (idx === 0 || idx === 3 ? 1.5 : 1) * dpr);
        ctx.beginPath();
        ctx.moveTo(pStart.x, pStart.y);
        ctx.lineTo(pEnd.x, pEnd.y);
        ctx.stroke();
      });

      const scrollOffset = (now * 0.045) % 14;
      ctx.strokeStyle = 'rgba(246, 245, 242, 0.14)';
      ctx.lineWidth = Math.max(1, 1 * dpr);
      for (let zLine = trackBackZ + scrollOffset; zLine <= trackFrontZ; zLine += 14) {
        const q1 = project3D(trackLeftX, floorY, zLine, cam, cw, ch);
        const q2 = project3D(trackRightX, floorY, zLine, cam, cw, ch);
        ctx.beginPath();
        ctx.moveTo(q1.x, q1.y);
        ctx.lineTo(q2.x, q2.y);
        ctx.stroke();
      }

      const cycleDuration = 3600;
      const heroZ = 32;
      let targetLaneIdx = 1;
      let jumpHeight = 0;

      const activeRunnerObjects = [];

      RUNNER_SPAWNS.forEach((spw, idx) => {
        const prog = ((now / cycleDuration) + spw.offset) % 1;
        const objZ = trackBackZ + prog * (trackFrontZ - trackBackZ);
        const objX = RUNNER_LANES[spw.lane];

        const distZ = heroZ - objZ;
        if (distZ > -6 && distZ < 22) {
          if (spw.type === 'block' && spw.lane === 1) {
            targetLaneIdx = 0;
          } else if (spw.type === 'block' && spw.lane === 0 && targetLaneIdx === 0) {
            targetLaneIdx = 2;
          } else if (spw.type === 'hurdle') {
            targetLaneIdx = spw.lane;
            if (Math.abs(distZ) < 11) {
              jumpHeight = Math.sin((1 - Math.abs(distZ) / 11) * Math.PI * 0.5) * 14;
            }
          }
        }

        if (spw.type === 'block') {
          activeRunnerObjects.push({
            id: `runner-obs-${idx}`,
            x: objX,
            y: 27,
            z: objZ,
            w: 13,
            h: 13,
            d: 10,
            cTop: '#3f4652',
            cLeft: '#282d35',
            cRight: '#1a1e24',
            stroke: '#848b98',
          });
        } else if (spw.type === 'hurdle') {
          activeRunnerObjects.push({
            id: `runner-hurdle-${idx}`,
            x: objX,
            y: 30.5,
            z: objZ,
            w: 14,
            h: 6,
            d: 6,
            cTop: '#c84b31',
            cLeft: '#9e3620',
            cRight: '#782614',
            stroke: '#f6f5f2',
          });
        } else if (spw.type === 'gem') {
          const bob = Math.sin(now * 0.008 + idx) * 2;
          activeRunnerObjects.push({
            id: `runner-gem-${idx}`,
            x: objX,
            y: 26 + bob,
            z: objZ,
            w: 6,
            h: 6,
            d: 6,
            cTop: '#f6f5f2',
            cLeft: '#c84b31',
            cRight: '#a33b24',
            stroke: '#111315',
          });
        }
      });

      if (!cv._heroLaneX) cv._heroLaneX = RUNNER_LANES[1];
      const desiredX = RUNNER_LANES[targetLaneIdx];
      cv._heroLaneX += (desiredX - cv._heroLaneX) * 0.14;
      const heroX = cv._heroLaneX;
      const heroBaseY = 27.5 - jumpHeight;

      const shadowPt = project3D(heroX, floorY - 0.2, heroZ, cam, cw, ch);
      ctx.fillStyle = 'rgba(17, 19, 21, 0.45)';
      const sw = Math.max(3, (9 - jumpHeight * 0.25) * shadowPt.scale);
      ctx.fillRect(shadowPt.x - sw, shadowPt.y - sw * 0.4, sw * 2, sw * 0.8);

      const rpgHeroParts = [
        {
          id: 'rpg-hero-body',
          x: heroX,
          y: heroBaseY,
          z: heroZ,
          w: 10,
          h: 11,
          d: 9,
          cTop: '#e05a3f',
          cLeft: '#c84b31',
          cRight: '#9e3620',
          stroke: '#111315',
        },
        {
          id: 'rpg-hero-head',
          x: heroX,
          y: heroBaseY - 8,
          z: heroZ,
          w: 7,
          h: 6,
          d: 7,
          cTop: '#f6f5f2',
          cLeft: '#d8d5cd',
          cRight: '#b8b4aa',
          stroke: '#111315',
        },
        {
          id: 'rpg-hero-sword',
          x: heroX + 7,
          y: heroBaseY - 2,
          z: heroZ - 3,
          w: 2.5,
          h: 3,
          d: 12,
          cTop: '#EAE8E1',
          cLeft: '#9ca3af',
          cRight: '#646d7a',
          stroke: '#111315',
        },
      ];

      // area tengah: jalur kabel & animasi paket data jaringan
      ['srv-pt', 'rtr-isp', 'rtr-kantor', 'sw-core', 'sw-hrd', 'sw-it', 'sw-fin', 'sw-srv'].forEach((nid) => {
        const nd = NODE_MAP[nid];
        if (!nd) return;
        const pTop = project3D(nd.x, nd.y + nd.h / 2, nd.z, cam, cw, ch);
        const pFloor = project3D(nd.x, 33.8, nd.z, cam, cw, ch);
        ctx.strokeStyle = 'rgba(246, 245, 242, 0.15)';
        ctx.lineWidth = Math.max(0.7, 0.9 * dpr);
        ctx.setLineDash([2 * dpr, 2 * dpr]);
        ctx.beginPath();
        ctx.moveTo(pTop.x, pTop.y);
        ctx.lineTo(pFloor.x, pFloor.y);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      CISCO_LINKS_3D.forEach((lnk, linkIdx) => {
        const nA = NODE_MAP[lnk.from];
        const nB = NODE_MAP[lnk.to];
        if (!nA || !nB) return;

        const pA = project3D(nA.x, nA.y, nA.z, cam, cw, ch);
        const pB = project3D(nB.x, nB.y, nB.z, cam, cw, ch);

        ctx.strokeStyle = 'rgba(246, 245, 242, 0.45)';
        ctx.lineWidth = Math.max(2.2, 3.0 * dpr);
        ctx.beginPath();
        ctx.moveTo(pA.x, pA.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.stroke();

        ctx.strokeStyle = '#111315';
        ctx.lineWidth = Math.max(1.3, 1.8 * dpr);
        ctx.beginPath();
        ctx.moveTo(pA.x, pA.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.stroke();

        drawCiscoPortIndicator(ctx, pA, pB, 0.24, lnk.startPort, dpr);
        drawCiscoPortIndicator(ctx, pA, pB, 0.76, lnk.endPort, dpr);

        const flowT = (now * 0.00055 + sp * 2.1 + linkIdx * 0.19) % 1;
        const pkt3d = {
          x: nA.x + (nB.x - nA.x) * flowT,
          y: nA.y + (nB.y - nA.y) * flowT,
          z: nA.z + (nB.z - nA.z) * flowT,
        };
        const pktProj = project3D(pkt3d.x, pkt3d.y, pkt3d.z, cam, cw, ch);
        const pw = Math.max(3.2, 5.2 * pktProj.scale);
        const ph = Math.max(2.4, 3.8 * pktProj.scale);
        ctx.fillStyle = '#c84b31';
        ctx.strokeStyle = '#F6F5F2';
        ctx.lineWidth = 0.8;
        ctx.fillRect(pktProj.x - pw / 2, pktProj.y - ph / 2, pw, ph);
        ctx.strokeRect(pktProj.x - pw / 2, pktProj.y - ph / 2, pw, ph);
      });

      // urutkan posisi objek dari belakang ke depan biar tumpukannya rapi
      const allObjects = [
        ...SCENE_OBJECTS,
        ...activeRunnerObjects,
        ...rpgHeroParts,
        ...CISCO_NODES_3D,
      ];

      const sorted = allObjects
        .map((b) => ({
          b,
          dist: b.layer
            ? 350 - b.layer * 15 + b.z * 0.25
            : Math.hypot(b.x - cam.x, b.y - cam.y, b.z - cam.z),
        }))
        .sort((a, b) => b.dist - a.dist);

      sorted.forEach(({ b }) => {
        if (b.type === 'router') {
          drawCiscoRouterCylinder(ctx, b.x, b.y, b.z, b.radius, b.height, cam, cw, ch, dpr);
          return;
        }
        if (b.type === 'switch') {
          drawCiscoSwitchNode(ctx, b, cam, cw, ch, dpr);
          return;
        }
        if (b.type === 'server-pt') {
          drawCiscoServerPTNode(ctx, b, cam, cw, ch, dpr);
          return;
        }
        if (b.type === 'pc') {
          drawCiscoPcNode(ctx, b, cam, cw, ch, dpr);
          return;
        }
        if (b.type === 'laptop') {
          drawCiscoLaptopNode(ctx, b, cam, cw, ch, dpr);
          return;
        }
        if (b.type === 'printer') {
          drawCiscoPrinterNode(ctx, b, cam, cw, ch, dpr);
          return;
        }

        drawIsoBox(ctx, b, cam, cw, ch, dpr);

        if (b.id === 'desk-top') {
          const shadows = [
            { x: 170, z: 7, hw: 9.2, hd: 16.8 },
            { x: 121, z: 12, hw: 9.6, hd: 5.6 },
            { x: 99, z: -2, hw: 3.4, hd: 3.4 },
            { x: 143, z: -2, hw: 3.4, hd: 3.4 },
          ];
          shadows.forEach((sh) => {
            const p1 = project3D(sh.x - sh.hw, 9.95, sh.z - sh.hd, cam, cw, ch);
            const p2 = project3D(sh.x + sh.hw, 9.95, sh.z - sh.hd, cam, cw, ch);
            const p3 = project3D(sh.x + sh.hw, 9.95, sh.z + sh.hd, cam, cw, ch);
            const p4 = project3D(sh.x - sh.hw, 9.95, sh.z + sh.hd, cam, cw, ch);
            drawQuad3D(ctx, p1, p2, p3, p4, 'rgba(11, 13, 16, 0.42)', null, 0);
          });
        }

        if (b.id === 'mon-screen') {
          const scrZ = b.z - b.d / 2 - 0.3;
          const s1 = project3D(b.x - 17.5, b.y - 10.5, scrZ, cam, cw, ch);
          const s2 = project3D(b.x + 17.5, b.y - 10.5, scrZ, cam, cw, ch);
          const s3 = project3D(b.x + 17.5, b.y + 10.5, scrZ, cam, cw, ch);
          const s4 = project3D(b.x - 17.5, b.y + 10.5, scrZ, cam, cw, ch);
          drawQuad3D(ctx, s1, s2, s3, s4, '#0f1318', '#38bdf8', 1);

          const sb1 = project3D(b.x - 17.5, b.y - 10.5, scrZ - 0.1, cam, cw, ch);
          const sb2 = project3D(b.x - 11.5, b.y - 10.5, scrZ - 0.1, cam, cw, ch);
          const sb3 = project3D(b.x - 11.5, b.y + 10.5, scrZ - 0.1, cam, cw, ch);
          const sb4 = project3D(b.x - 17.5, b.y + 10.5, scrZ - 0.1, cam, cw, ch);
          drawQuad3D(ctx, sb1, sb2, sb3, sb4, '#181c24', null, 0);

          const codeLines = [
            { yOff: -7.5, xOff: -9, len: 11, color: '#c678dd' },
            { yOff: -4.5, xOff: -7, len: 19, color: '#61dafb' },
            { yOff: -1.5, xOff: -5, len: 15, color: '#98c379' },
            { yOff: 1.5, xOff: -7, len: 21, color: '#e5c07b' },
            { yOff: 4.5, xOff: -9, len: 14, color: '#56b6c2' },
            { yOff: 7.5, xOff: -9, len: 8 + ((Math.floor(now / 280) % 5) * 2.5), color: '#c84b31' },
          ];
          codeLines.forEach((line) => {
            const cStart = project3D(b.x + line.xOff, b.y + line.yOff, scrZ - 0.25, cam, cw, ch);
            const cEnd = project3D(b.x + line.xOff + line.len, b.y + line.yOff, scrZ - 0.25, cam, cw, ch);
            ctx.strokeStyle = line.color;
            ctx.lineWidth = Math.max(1.2, 2.0 * dpr);
            ctx.beginPath();
            ctx.moveTo(cStart.x, cStart.y);
            ctx.lineTo(cEnd.x, cEnd.y);
            ctx.stroke();
          });
        }

        if (b.id === 'speaker-l' || b.id === 'speaker-r') {
          const spkFrontZ = b.z - b.d / 2 - 0.2;
          const topDriver = project3D(b.x, b.y - 1.6, spkFrontZ, cam, cw, ch);
          const botDriver = project3D(b.x, b.y + 1.6, spkFrontZ, cam, cw, ch);
          ctx.strokeStyle = '#9ca3af';
          ctx.lineWidth = Math.max(0.8, 1.1 * dpr);
          ctx.beginPath();
          ctx.arc(topDriver.x, topDriver.y, Math.max(1.2, 1.8 * topDriver.scale), 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(botDriver.x, botDriver.y, Math.max(1.8, 2.8 * botDriver.scale), 0, Math.PI * 2);
          ctx.stroke();
        }

        if (b.id === 'pc-case') {
          const sideX = b.x - b.w / 2 - 0.15;
          const g1 = project3D(sideX, b.y - 11, b.z - 13, cam, cw, ch);
          const g2 = project3D(sideX, b.y - 11, b.z + 13, cam, cw, ch);
          const g3 = project3D(sideX, b.y + 8, b.z + 13, cam, cw, ch);
          const g4 = project3D(sideX, b.y + 8, b.z - 13, cam, cw, ch);
          drawQuad3D(ctx, g1, g2, g3, g4, 'rgba(15, 19, 24, 0.85)', '#525866', 0.9);

          const gpuLine1 = project3D(sideX - 0.05, b.y + 1, b.z - 9, cam, cw, ch);
          const gpuLine2 = project3D(sideX - 0.05, b.y + 1, b.z + 7, cam, cw, ch);
          ctx.strokeStyle = '#c84b31';
          ctx.lineWidth = Math.max(1.2, 1.8 * dpr);
          ctx.beginPath();
          ctx.moveTo(gpuLine1.x, gpuLine1.y);
          ctx.lineTo(gpuLine2.x, gpuLine2.y);
          ctx.stroke();

          const pcFrontZ = b.z - b.d / 2 - 0.25;
          const pwrLed = project3D(b.x, b.y - 10, pcFrontZ, cam, cw, ch);
          const s = Math.max(2, 3.5 * pwrLed.scale);
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(pwrLed.x - s / 2, pwrLed.y - s / 2, s, s);

          const stripTop = project3D(b.x, b.y - 6, pcFrontZ, cam, cw, ch);
          const stripBot = project3D(b.x, b.y + 10, pcFrontZ, cam, cw, ch);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = Math.max(1.0, 1.5 * dpr);
          ctx.beginPath();
          ctx.moveTo(stripTop.x, stripTop.y);
          ctx.lineTo(stripBot.x, stripBot.y);
          ctx.stroke();
        }

        if (b.id === 'keyboard') {
          const kbFrontZ = b.z - b.d / 2 - 0.2;
          const k1 = project3D(b.x - 11.5, b.y + 0.6, kbFrontZ, cam, cw, ch);
          const k2 = project3D(b.x + 11.5, b.y + 0.6, kbFrontZ, cam, cw, ch);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = Math.max(1.0, 1.5 * dpr);
          ctx.beginPath();
          ctx.moveTo(k1.x, k1.y);
          ctx.lineTo(k2.x, k2.y);
          ctx.stroke();
        }
      });

      // label perangkat, info VLAN, & bar HP karakter
      const hudPt = project3D(heroX, heroBaseY - 16, heroZ, cam, cw, ch);
      const barW = (isMobile ? 20 : 36) * dpr;
      const barH = (isMobile ? 2.5 : 4) * dpr;
      ctx.fillStyle = '#111315';
      ctx.fillRect(hudPt.x - barW / 2 - 1, hudPt.y - barH / 2 - 1, barW + 2, barH + 2);
      ctx.fillStyle = '#1f7a4c';
      ctx.fillRect(hudPt.x - barW / 2, hudPt.y - barH / 2, barW * 0.88, barH);

      ctx.font = `700 ${Math.round((isMobile ? 5.5 : 8) * dpr)}px "Plus Jakarta Sans", sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#111315';
      ctx.fillText(isMobile ? 'LV.05 HP' : 'LV.05 HERO · HP', hudPt.x, hudPt.y - 3.5 * dpr);

      CISCO_NODES_3D.forEach((node) => {
        if (node.vlanTitle) {
          const vpBox = project3D(node.x, node.y - 9.5, node.z - 2, cam, cw, ch);
          const fontTitle = Math.round((isMobile ? 5.2 : 7.5) * dpr);
          const fontSub = Math.round((isMobile ? 4.8 : 6.8) * dpr);
          ctx.font = `700 ${fontTitle}px "Plus Jakarta Sans", sans-serif`;
          const w1 = ctx.measureText(node.vlanTitle).width;
          ctx.font = `600 ${fontSub}px "Plus Jakarta Sans", sans-serif`;
          const w2 = isMobile ? 0 : ctx.measureText(node.vlanSub).width;
          const boxW = Math.max(w1, w2) + (isMobile ? 5.5 : 10) * dpr;
          const boxH = (isMobile ? 8.5 : 19) * dpr;

          ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
          ctx.strokeStyle = '#111315';
          ctx.lineWidth = 0.9;
          ctx.fillRect(vpBox.x - boxW / 2, vpBox.y - boxH, boxW, boxH);
          ctx.strokeRect(vpBox.x - boxW / 2, vpBox.y - boxH, boxW, boxH);

          ctx.fillStyle = '#111315';
          ctx.textAlign = 'center';
          if (isMobile) {
            ctx.font = `700 ${fontTitle}px "Plus Jakarta Sans", sans-serif`;
            ctx.fillText(node.vlanTitle, vpBox.x, vpBox.y - 2 * dpr);
          } else {
            ctx.font = `700 ${fontTitle}px "Plus Jakarta Sans", sans-serif`;
            ctx.fillText(node.vlanTitle, vpBox.x, vpBox.y - 10.5 * dpr);
            ctx.font = `600 ${fontSub}px "Plus Jakarta Sans", sans-serif`;
            ctx.fillStyle = '#334155';
            ctx.fillText(node.vlanSub, vpBox.x, vpBox.y - 2.8 * dpr);
          }
        }

        if (isMobile && (node.type === 'pc' || node.type === 'laptop' || node.type === 'printer')) {
          return;
        }

        const lblYOffset = node.type === 'server-pt' ? node.h / 2 + 4.5 : node.h / 2 + 4.2;
        const lp = project3D(node.x, node.y + lblYOffset, node.z + 2, cam, cw, ch);
        const fSize = Math.round((isMobile ? 5 : 6.8) * dpr);
        ctx.font = `700 ${fSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';

        const displayTxt = node.sub || node.label;
        const tw = ctx.measureText(displayTxt).width;
        const padX = (isMobile ? 2 : 3) * dpr;
        const th = (isMobile ? 6.5 : 9) * dpr;

        ctx.fillStyle = 'rgba(246, 245, 242, 0.88)';
        ctx.fillRect(lp.x - tw / 2 - padX, lp.y - th + 1.8 * dpr, tw + padX * 2, th);
        ctx.fillStyle = '#111315';
        ctx.fillText(displayTxt, lp.x, lp.y);
      });

      drawVSCodeStackFloatingGUI(ctx, cam, cw, ch, dpr, isMobile, now);

      const isEn = langRef.current === 'en';
      const zoneLabels = isMobile
        ? [
            { x: -140, y: -10, z: -42, text: isEn ? '01 · RPG RUNNER' : '01 · RPG RUNNER' },
            { x: 0, y: -72, z: -46, text: isEn ? '02 · CISCO 3D TOPOLOGY' : '02 · TOPOLOGI CISCO 3D' },
            { x: 144, y: -62, z: 4, text: isEn ? '03 · PC WORKSTATION' : '03 · PC WORKSTATION' },
          ]
        : [
            { x: -140, y: -6, z: -42, text: isEn ? '01 · RPG & ENDLESS RUNNER (GODOT 4)' : '01 · RPG & ENDLESS RUNNER (GODOT 4)' },
            { x: 0, y: -73, z: -46, text: isEn ? '02 · 3D CISCO NETWORK TOPOLOGY (4 VLANS)' : '02 · TOPOLOGI JARINGAN CISCO 3D (4 VLAN)' },
            { x: 144, y: -56, z: 4, text: isEn ? '03 · PC RIG & CODE WORKSTATION' : '03 · PC RIG & CODE WORKSTATION' },
          ];

      ctx.font = `700 ${Math.round((isMobile ? 6.2 : 9.5) * dpr)}px "Plus Jakarta Sans", sans-serif`;
      zoneLabels.forEach((lbl) => {
        const pt = project3D(lbl.x, lbl.y, lbl.z, cam, cw, ch);
        ctx.fillStyle = '#111315';
        const padX = (isMobile ? 4 : 8) * dpr;
        const padY = (isMobile ? 2 : 4) * dpr;
        const textW = ctx.measureText(lbl.text).width;
        const boxW = textW + padX * 2;
        const boxH = (isMobile ? 9 : 14) * dpr + padY;
        const boxX = clamp(pt.x - boxW / 2, 4 * dpr, cw - boxW - 4 * dpr);
        ctx.fillRect(boxX, pt.y - (isMobile ? 5.5 : 7) * dpr - padY, boxW, boxH);
        ctx.fillStyle = '#F6F5F2';
        ctx.fillText(lbl.text, boxX + boxW / 2, pt.y + (isMobile ? 1 : 1.5) * dpr);
      });
    };

    let mx = 0;
    let my = 0;
    let sx = 0;
    let sy = 0;
    const handlePointerMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('resize', sizeCanvas);

    let sp = 0;
    let lastTime = performance.now();
    let animId;

    const tick = (now) => {
      const dt = Math.min(64, Math.max(1, now - lastTime));
      lastTime = now;

      const storyRect = story.getBoundingClientRect();
      const maxScroll = Math.max(1, story.offsetHeight - window.innerHeight);
      const p = clamp(-storyRect.top / maxScroll, 0, 1);
      sp += (p - sp) * (1 - Math.pow(0.86, dt / 16.7));
      if (Math.abs(p - sp) < 0.0002) sp = p;

      sx += (mx - sx) * 0.06;
      sy += (my - sy) * 0.06;

      const vp = ease(seg(sp, 0.05, 0.85));
      renderThreeZoneDiorama(vp, sx, sy, sp, now);

      // atur transisi layar pembuka & kartu zona waktu di-scroll
      const h = seg(sp, 0.08, 0.36);
      if (layer0Ref.current && heroCardRef.current) {
        if (h >= 1) {
          layer0Ref.current.style.visibility = 'hidden';
        } else {
          layer0Ref.current.style.visibility = 'visible';
          heroCardRef.current.style.opacity = 1 - h;
          heroCardRef.current.style.transform = `translate3d(0, ${-h * 28}px, 0)`;
        }
      }

      const pIn = ease(seg(sp, 0.38, 0.58));
      const pOut = seg(sp, 0.86, 0.98);
      const pinOp = pIn * (1 - pOut);
      if (layer2Ref.current) {
        if (pinOp <= 0.01) {
          layer2Ref.current.style.visibility = 'hidden';
        } else {
          layer2Ref.current.style.visibility = 'visible';
          layer2Ref.current.style.opacity = pinOp;
          pinRefs.current.forEach((pinEl, i) => {
            if (!pinEl) return;
            const lift = (1 - pIn) * (18 + i * 5);
            if (heroPinsData[i]?.isCenteredDesktop && window.innerWidth > 960) {
              pinEl.style.transform = `translate3d(-50%, ${lift}px, 0)`;
            } else {
              pinEl.style.transform = `translate3d(0, ${lift}px, 0)`;
            }
          });
        }
      }

      if (progBarRef.current) {
        progBarRef.current.style.transform = `scaleX(${sp})`;
      }

      animId = requestAnimationFrame(tick);
    };

    sizeCanvas();
    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', sizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="story" ref={storyRef}>
      <div className="stage">
        <div className="cam" id="camB">
          <canvas id="cv" ref={canvasRef} />
        </div>

        {/* tampilan awal hero */}
        <div className="layer" id="L0" ref={layer0Ref}>
          <div className="hero-full-overlay" id="heroCard" ref={heroCardRef}>
            <div className="hero-container">
              <div className="hero-meta-bar">
                <span></span>
                <span>{profileData.locationText}</span>
              </div>

              <div className="hero-editorial-split">
                <div className="hero-primary-col">
                  <p className="hero-role-kicker">{profileData.roleTitle}</p>
                  <h1 className="hero-display-name">{profileData.fullName}</h1>
                  <p className="hero-lead-copy">{profileData.heroDescription}</p>

                  <div className="hero-actions">
                    <ScrambleButton
                      href="#projects"
                      className="btn-primary"
                      text={t.heroCtaProjects}
                    />
                  </div>
                </div>

                <aside className="hero-index-col" aria-label={t.heroIndexAria}>
                  <div className="hero-index-item">
                    <span className="hero-index-no">I.</span>
                    <div>
                      <h2>{t.heroPillar1Title}</h2>
                      <p>{t.heroPillar1Desc}</p>
                    </div>
                  </div>

                  <div className="hero-index-item">
                    <span className="hero-index-no">II.</span>
                    <div>
                      <h2>{t.heroPillar2Title}</h2>
                      <p>{t.heroPillar2Desc}</p>
                    </div>
                  </div>

                  <div className="hero-index-item">
                    <span className="hero-index-no">III.</span>
                    <div>
                      <h2>{t.heroPillar3Title}</h2>
                      <p>{t.heroPillar3Desc}</p>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="hero-footer-bar">
                <span>{t.heroEducation}</span>
                <span className="hero-scroll-note">{profileData.scrollHintText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* kartu info tiap zona 3D */}
        <div className="layer" id="L2" ref={layer2Ref} style={{ visibility: 'hidden' }}>
          {heroPinsData.map((pin, idx) => (
            <div
              key={pin.id}
              id={pin.id}
              className="pin-card"
              style={pin.style}
              ref={(el) => {
                pinRefs.current[idx] = el;
              }}
            >
              <div className="pin-tag">{pin.tag}</div>
              <h3>{pin.title}</h3>
              <p>{pin.description}</p>
            </div>
          ))}
        </div>

        <div className="prog">
          <div className="prog-inner" id="progBar" ref={progBarRef} />
        </div>
      </div>
    </section>
  );
}
