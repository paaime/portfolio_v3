'use client';
import StarIcon from '../icons/StarIcon';
import Lottie from 'lottie-react';

export default function UxCard() {
  return (
    <div className="group bg-[#0a1e29] rounded-[18px] transition-all cursor-pointer relative overflow-hidden ux-card">
      <div
        className="flex items-end bg-[#07151d] rounded-2xl border-[0.5px] border-[#70707029] m-1 p-4 md:p-7 overflow-hidden relative"
        style={{
          height: 'calc(100% - 0.5rem)',
          boxShadow:
            'rgb(7, 21, 28) -2px -2px 5px 0px inset, rgb(7, 21, 28) 2px 2px 3px 0px inset, rgba(6, 21, 29, 0.65) 0px 2px 10px 2px',
        }}
      >
        <div className="flex flex-col gap-[10px] w-full">
          <div
            className="rounded-full absolute left-0 w-[110px] h-[1365px] top-0 group-hover:opacity-100 opacity-0 transition-all"
            style={{
              filter: 'blur(465px)',
              background:
                'linear-gradient(99.69833281472663deg,#c6fca6 0%,rgba(167,252,238,.7400000095367432) 100%)',
            }}
          />
          <Lottie
            className="h-[150px] md:h-[250px] md:mb-[-20px]"
            animationData={{
              nm: 'Comp 5',
              ddd: 0,
              h: 1080,
              w: 1080,
              meta: {
                g: 'LottieFiles AE 1.0.0',
              },
              layers: [
                {
                  ty: 4,
                  nm: 'restart Outlines',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [540, 540, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.213,
                            y: 1.64,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [0, 0, 100],
                          t: 166,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [6.476, 6.476, 100],
                          t: 172,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.833,
                            y: 1,
                          },
                          s: [6.476, 6.476, 100],
                          t: 217,
                        },
                        {
                          s: [0, 0, 100],
                          t: 223.000009082976,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [431, 645, 0],
                      ix: 2,
                    },
                    r: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [0],
                          t: 166,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [360],
                          t: 172,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [360],
                          t: 217,
                        },
                        {
                          s: [0],
                          t: 223.000009082976,
                        },
                      ],
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 1',
                      ix: 1,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [27.99, -0.006],
                                [27.324, 0.021],
                                [0.007, 16.196],
                                [0.107, 54.648],
                                [-10.627, 4.487],
                                [-7.33, -7.253],
                                [-15.102, -15.29],
                                [-2.96, 2.677],
                                [-61.138, 7.211],
                                [-51.959, -115.982],
                                [151.507, -62.053],
                                [80.016, 93.603],
                                [-8.577, 8.657],
                                [-15.266, 15.365],
                                [-7.137, -8.7],
                                [-65.04, 2.761],
                                [-14.747, 86.943],
                                [102.183, 22.216],
                                [48.719, -41.898],
                                [-2.564, -2.548],
                                [-15.795, -16.012],
                                [7.855, -11.27],
                                [7.824, -0.003],
                              ],
                              o: [
                                [-27.324, 0.006],
                                [-16.258, -0.012],
                                [-0.023, -54.648],
                                [-0.021, -11.403],
                                [9.465, -3.996],
                                [15.276, 15.118],
                                [2.992, 3.03],
                                [45.663, -41.297],
                                [126.492, -14.92],
                                [66.491, 148.418],
                                [-114.043, 46.708],
                                [-7.929, -9.276],
                                [15.244, -15.386],
                                [7.974, -8.023],
                                [41.387, 50.452],
                                [88.039, -3.738],
                                [17.366, -102.38],
                                [-62.499, -13.589],
                                [-2.987, 2.57],
                                [15.953, 15.853],
                                [9.723, 9.857],
                                [-4.577, 6.565],
                                [-27.991, 0.01],
                              ],
                              v: [
                                [-200.413, -54.399],
                                [-282.385, -54.399],
                                [-308.606, -80.488],
                                [-308.663, -244.431],
                                [-293.476, -268.42],
                                [-268.268, -263.67],
                                [-222.526, -218.231],
                                [-215.075, -218.257],
                                [-54.936, -292.136],
                                [242.193, -123.206],
                                [87.263, 260.348],
                                [-238.991, 181.508],
                                [-238.171, 158.343],
                                [-192.41, 112.215],
                                [-170.185, 113.343],
                                [-10.267, 185.241],
                                [168.367, 26.841],
                                [19.67, -193.775],
                                [-147.8, -150.02],
                                [-147.884, -143.598],
                                [-100.318, -95.742],
                                [-97.596, -63.787],
                                [-116.442, -54.409],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [1, 1, 1],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [573.992, 565.764],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 2',
                      ix: 2,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [-0.043, 0.286],
                                [-1.354, -1.928],
                              ],
                              o: [
                                [0.008, -0.288],
                                [1.65, 0.241],
                                [0, 0],
                              ],
                              v: [
                                [-2.5, 0.964],
                                [-2.425, 0.103],
                                [2.499, 0.964],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0471, 0.2314, 0.3686],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [564.763, 1051.221],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 3',
                      ix: 3,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0.03, -1.664],
                                [0.279, 0],
                                [0, 0],
                                [-0.302, -0.071],
                              ],
                              o: [
                                [-0.273, -0.057],
                                [0, 0],
                                [0.311, -0.012],
                                [-0.031, 1.666],
                              ],
                              v: [
                                [0.368, 2.548],
                                [-0.46, 2.463],
                                [-0.46, -2.536],
                                [0.46, -2.447],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0706, 0.3725, 0.5922],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [28.83, 558.822],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 4',
                      ix: 4,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [0.273, -0.054],
                                [0.009, 1.645],
                                [-0.292, 0.015],
                              ],
                              o: [
                                [-0.279, 0.001],
                                [-0.011, -1.646],
                                [0.282, -0.08],
                                [0, 0],
                              ],
                              v: [
                                [0.43, 2.458],
                                [-0.399, 2.54],
                                [-0.43, -2.399],
                                [0.43, -2.541],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0745, 0.4, 0.6353],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [1051.735, 556.827],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 5',
                      ix: 5,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-0.011, 1.646],
                                [-0.278, -0.002],
                                [0, 0],
                                [0.281, 0.081],
                              ],
                              o: [
                                [0.273, 0.053],
                                [0, 0],
                                [-0.292, -0.015],
                                [0.01, -1.647],
                              ],
                              v: [
                                [-0.399, -2.541],
                                [0.43, -2.458],
                                [0.43, 2.541],
                                [-0.43, 2.399],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0745, 0.4, 0.6353],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [1051.735, 523.751],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 6',
                      ix: 6,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [-0.273, 0.057],
                                [-0.03, -1.664],
                                [0.311, 0.011],
                              ],
                              o: [
                                [0.279, 0],
                                [0.03, 1.666],
                                [-0.303, 0.07],
                                [0, 0],
                              ],
                              v: [
                                [-0.46, -2.462],
                                [0.368, -2.548],
                                [0.46, 2.447],
                                [-0.46, 2.537],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0706, 0.3725, 0.5922],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [28.831, 521.755],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 7',
                      ix: 7,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-1.984, 0.221],
                                [-0.009, -0.288],
                                [0, 0],
                              ],
                              o: [
                                [0.041, 0.286],
                                [0, 0],
                                [1.729, -1.975],
                              ],
                              v: [
                                [2.924, 0.125],
                                [2.999, 0.988],
                                [-3, 0.988],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0471, 0.2314, 0.3686],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [515.273, 1051.197],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 8',
                      ix: 8,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-0.201, -0.75],
                                [1.92, -1.74],
                                [0, 0],
                              ],
                              o: [
                                [-0.176, 1.985],
                                [0, 0],
                                [0.351, -0.693],
                              ],
                              v: [
                                [-0.132, -2.568],
                                [-0.96, 3.346],
                                [-0.96, -2.652],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0471, 0.251, 0.4],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [29.33, 563.938],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 9',
                      ix: 9,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [0.133, 1.992],
                                [-0.348, -0.693],
                              ],
                              o: [
                                [-1.891, -1.746],
                                [0.205, -0.748],
                                [0, 0],
                              ],
                              v: [
                                [0.946, 3.346],
                                [0.116, -2.571],
                                [0.946, -2.653],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0588, 0.298, 0.4745],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [1051.219, 561.938],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 10',
                      ix: 10,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0.205, 0.748],
                                [-1.891, 1.747],
                                [0, 0],
                              ],
                              o: [
                                [0.133, -1.992],
                                [0, 0],
                                [-0.348, 0.693],
                              ],
                              v: [
                                [0.116, 2.57],
                                [0.945, -3.346],
                                [0.945, 2.654],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0588, 0.298, 0.4745],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [1051.219, 518.64],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 11',
                      ix: 11,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [-0.176, -1.985],
                                [0.351, 0.693],
                              ],
                              o: [
                                [1.92, 1.741],
                                [-0.202, 0.751],
                                [0, 0],
                              ],
                              v: [
                                [-0.96, -3.346],
                                [-0.132, 2.567],
                                [-0.96, 2.653],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0471, 0.251, 0.4],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [29.331, 516.64],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 12',
                      ix: 12,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [0.046, -0.29],
                                [1.741, 1.783],
                              ],
                              o: [
                                [-0.028, 0.293],
                                [-1.983, -0.162],
                                [0, 0],
                              ],
                              v: [
                                [3, -0.892],
                                [2.888, -0.017],
                                [-3, -0.892],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0745, 0.3922, 0.6235],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [522.271, 29.285],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 13',
                      ix: 13,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [-0.063, 0.286],
                                [-2.304, -0.001],
                                [0.753, -0.224],
                              ],
                              o: [
                                [0.044, -0.29],
                                [2.305, 0.002],
                                [0.702, 0.35],
                                [0, 0],
                              ],
                              v: [
                                [-3.888, 0.432],
                                [-3.728, -0.432],
                                [3.186, -0.428],
                                [3.111, 0.432],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0706, 0.3647, 0.5843],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [559.153, 1051.752],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 14',
                      ix: 14,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-2.305, 0.002],
                                [-0.044, -0.29],
                                [0, 0],
                                [-0.702, 0.351],
                              ],
                              o: [
                                [0.062, 0.287],
                                [0, 0],
                                [-0.753, -0.223],
                                [2.305, -0.001],
                              ],
                              v: [
                                [3.729, -0.433],
                                [3.888, 0.433],
                                [-3.11, 0.433],
                                [-3.186, -0.429],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0706, 0.3686, 0.5843],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [521.383, 1051.751],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 15',
                      ix: 15,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [2.299, -0.325],
                                [0.021, 0.284],
                                [0, 0],
                              ],
                              o: [
                                [-0.038, -0.282],
                                [0, 0],
                                [-2.071, 2.169],
                              ],
                              v: [
                                [-3.411, -0.237],
                                [-3.499, -1.084],
                                [3.499, -1.084],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0431, 0.2235, 0.3569],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [565.763, 29.477],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 16',
                      ix: 16,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [2.309, 0.006],
                                [0.054, 0.277],
                                [0, 0],
                                [0.691, -0.358],
                              ],
                              o: [
                                [-0.054, -0.277],
                                [0, 0],
                                [0.75, 0.208],
                                [-2.309, -0.006],
                              ],
                              v: [
                                [-3.729, 0.407],
                                [-3.889, -0.424],
                                [3.11, -0.424],
                                [3.198, 0.424],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0706, 0.3725, 0.5882],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [559.154, 28.817],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 17',
                      ix: 17,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0.114, 0],
                                [2.244, 1.495],
                                [0, 0],
                                [0.087, -0.209],
                              ],
                              o: [
                                [-2.427, 0.072],
                                [0, 0],
                                [0.403, 0.114],
                                [-0.095, 0.231],
                              ],
                              v: [
                                [3.379, 0.083],
                                [-3.779, -0.747],
                                [3.219, -0.747],
                                [3.693, -0.263],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0941, 0.498, 0.7922],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [552.046, 29.141],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 18',
                      ix: 18,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [2.408, 0.014],
                                [-0.731, 0.203],
                              ],
                              o: [
                                [-2.222, 1.495],
                                [-0.657, -0.381],
                                [0, 0],
                              ],
                              v: [
                                [3.884, -0.748],
                                [-3.227, 0.127],
                                [-3.115, -0.748],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.0941, 0.498, 0.7922],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [528.385, 29.141],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 19',
                      ix: 19,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0.378, 0.502],
                                [-1.67, 2.916],
                                [0, 0],
                              ],
                              o: [
                                [0.013, -3.073],
                                [0, 0],
                                [-0.195, 0.597],
                              ],
                              v: [
                                [-0.024, 4.319],
                                [0.835, -4.822],
                                [0.835, 4.177],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.098, 0.5137, 0.8196],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [1051.33, 550.109],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 20',
                      ix: 20,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [0.012, 3.073],
                                [-0.197, -0.586],
                              ],
                              o: [
                                [-1.671, -2.917],
                                [0.38, -0.517],
                                [0, 0],
                              ],
                              v: [
                                [0.835, 4.829],
                                [-0.024, -4.312],
                                [0.835, -4.169],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.098, 0.5137, 0.8196],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [1051.33, 530.461],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 21',
                      ix: 21,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [-0.116, -3.38],
                                [0.239, 0.719],
                              ],
                              o: [
                                [1.726, 3.233],
                                [-0.374, 0.659],
                                [0, 0],
                              ],
                              v: [
                                [-0.863, -5.374],
                                [0.056, 4.714],
                                [-0.863, 4.625],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.098, 0.5059, 0.8039],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [29.234, 551.662],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 22',
                      ix: 22,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-0.374, -0.66],
                                [1.726, -3.234],
                                [0, 0],
                              ],
                              o: [
                                [-0.116, 3.38],
                                [0, 0],
                                [0.239, -0.719],
                              ],
                              v: [
                                [0.056, -4.714],
                                [-0.863, 5.374],
                                [-0.863, -4.624],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.098, 0.5059, 0.8039],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [29.234, 528.916],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 23',
                      ix: 23,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 0],
                                [-4.066, 0.084],
                                [0.163, -0.169],
                                [0.153, 0],
                              ],
                              o: [
                                [3.943, -1.815],
                                [0.348, 0.263],
                                [-0.139, 0.145],
                                [0, 0],
                              ],
                              v: [
                                [-6.298, 0.907],
                                [5.859, 0.042],
                                [6.135, 0.691],
                                [5.698, 0.907],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.098, 0.5137, 0.8196],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [549.566, 1051.277],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 24',
                      ix: 24,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-0.12, 0],
                                [-3.944, -1.816],
                                [0, 0],
                                [-0.092, 0.217],
                              ],
                              o: [
                                [4.067, 0.085],
                                [0, 0],
                                [-0.42, -0.122],
                                [0.102, -0.239],
                              ],
                              v: [
                                [-5.866, 0.042],
                                [6.291, 0.908],
                                [-5.707, 0.908],
                                [-6.198, 0.401],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.098, 0.5137, 0.8196],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [530.978, 1051.276],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 25',
                      ix: 25,
                      cix: 2,
                      np: 2,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-2.238, 1.059],
                                [0, 0],
                                [-2.393, -0.247],
                                [0, 0],
                                [-2.351, 1.056],
                                [0, 0],
                                [-7.905, -0.275],
                                [-18.966, -4.189],
                                [-41.227, -21.991],
                                [-24.775, -19.543],
                                [-13.018, -13.034],
                                [-20.913, -33.498],
                                [-11.72, -29.458],
                                [-5.167, -41.679],
                                [-0.609, -11.231],
                                [-0.997, -1.533],
                                [0, 0],
                                [0.255, -2.068],
                                [0, 0],
                                [-1.068, -2.922],
                                [0, 0],
                                [0.272, -2.952],
                                [0, 0],
                                [-1.056, -2.016],
                                [0, 0],
                                [0.246, -7.907],
                                [4.781, -20.865],
                                [20.244, -38.524],
                                [22.093, -27.065],
                                [12.392, -12.266],
                                [38.548, -22.338],
                                [62.823, -10.167],
                                [15.791, -0.854],
                                [1.534, -0.997],
                                [0, 0],
                                [1.828, 0.238],
                                [0, 0],
                                [3.911, -1.106],
                                [0, 0],
                                [3.942, 0.293],
                                [0, 0],
                                [2.08, -1.009],
                                [0, 0],
                                [7.91, 0.265],
                                [20.906, 4.777],
                                [38.508, 20.233],
                                [27.067, 22.053],
                                [12.351, 12.524],
                                [21.647, 36.387],
                                [11.681, 57.981],
                                [0.37, 19.11],
                                [1.052, 4.38],
                                [0, 0],
                                [-0.256, 2.075],
                                [0, 0],
                                [1.109, 3.238],
                                [0, 0],
                                [-0.285, 3.265],
                                [0, 0],
                                [1.056, 2.026],
                                [0, 0],
                                [-0.266, 7.906],
                                [-4.789, 20.881],
                                [-21.011, 39.438],
                                [-21.329, 26.148],
                                [-11.769, 11.703],
                                [-37.638, 22.225],
                                [-36.598, 11.754],
                                [-30.031, 3.537],
                                [-11.692, 0.64],
                                [-1.532, 0.996],
                                [0, 0],
                                [-2.023, -0.254],
                              ],
                              o: [
                                [0, 0],
                                [2.337, 1.056],
                                [0, 0],
                                [2.408, -0.246],
                                [0, 0],
                                [7.869, 1.072],
                                [19.495, 0.677],
                                [45.634, 10.078],
                                [27.821, 14.841],
                                [14.532, 11.462],
                                [27.814, 27.849],
                                [16.806, 26.919],
                                [15.519, 39.01],
                                [1.382, 11.144],
                                [0.088, 1.621],
                                [0, 0],
                                [-1.055, 2.002],
                                [0, 0],
                                [0.272, 2.967],
                                [0, 0],
                                [-1.068, 2.907],
                                [0, 0],
                                [0.256, 2.08],
                                [0, 0],
                                [-1.191, 7.864],
                                [-0.671, 21.526],
                                [-9.724, 42.444],
                                [-16.234, 30.893],
                                [-11.069, 13.561],
                                [-31.597, 31.275],
                                [-55.088, 31.922],
                                [-15.668, 2.536],
                                [-1.621, 0.088],
                                [0, 0],
                                [-1.755, -1.029],
                                [0, 0],
                                [-3.948, 0.292],
                                [0, 0],
                                [-3.909, -1.106],
                                [0, 0],
                                [-2.14, 0.234],
                                [0, 0],
                                [-7.867, -1.196],
                                [-21.563, -0.722],
                                [-42.429, -9.696],
                                [-30.881, -16.225],
                                [-13.691, -11.156],
                                [-29.655, -30.07],
                                [-30.258, -50.862],
                                [-3.77, -18.714],
                                [-0.085, -4.406],
                                [0, 0],
                                [1.056, -2.01],
                                [0, 0],
                                [-0.284, -3.281],
                                [0, 0],
                                [1.11, -3.223],
                                [0, 0],
                                [-0.257, -2.088],
                                [0, 0],
                                [1.072, -7.87],
                                [0.725, -21.524],
                                [9.999, -43.594],
                                [15.85, -29.752],
                                [10.531, -12.91],
                                [30.908, -30.735],
                                [33.122, -19.559],
                                [28.74, -9.23],
                                [11.634, -1.37],
                                [1.62, -0.088],
                                [0, 0],
                                [1.958, 1.053],
                                [2.297, -0.248],
                              ],
                              v: [
                                [-7.998, -511.896],
                                [7.998, -511.896],
                                [15.195, -511.396],
                                [21.755, -511.396],
                                [28.993, -511.896],
                                [29.993, -511.896],
                                [53.709, -510.567],
                                [111.252, -502.319],
                                [241.591, -454.246],
                                [320.315, -402.426],
                                [361.708, -365.668],
                                [435.284, -273.993],
                                [478.268, -189.554],
                                [509.598, -68.538],
                                [511.416, -34.85],
                                [511.897, -29.994],
                                [511.897, -24.995],
                                [511.397, -18.773],
                                [511.397, -13.918],
                                [511.897, -4.999],
                                [511.897, 4.999],
                                [511.397, 13.873],
                                [511.397, 18.732],
                                [511.897, 24.995],
                                [511.897, 29.994],
                                [510.573, 53.717],
                                [500.888, 117.065],
                                [455.781, 238.513],
                                [398.273, 325.445],
                                [363.109, 364.293],
                                [258.064, 445.037],
                                [81.164, 508.035],
                                [33.852, 511.413],
                                [28.993, 511.896],
                                [26.995, 511.896],
                                [21.495, 511.396],
                                [14.854, 511.396],
                                [3, 511.896],
                                [-3, 511.896],
                                [-14.844, 511.396],
                                [-21.557, 511.396],
                                [-27.995, 511.896],
                                [-29.994, 511.896],
                                [-53.729, 510.544],
                                [-117.205, 500.843],
                                [-238.588, 455.741],
                                [-325.478, 398.264],
                                [-364.638, 362.754],
                                [-441.931, 263.275],
                                [-504.682, 99.988],
                                [-511.021, 43.298],
                                [-511.897, 29.994],
                                [-511.897, 26.994],
                                [-511.397, 20.749],
                                [-511.397, 15.858],
                                [-511.897, 5.999],
                                [-511.897, -5.999],
                                [-511.397, -15.812],
                                [-511.397, -20.707],
                                [-511.897, -26.995],
                                [-511.897, -29.994],
                                [-510.568, -53.713],
                                [-500.905, -117.088],
                                [-454.208, -241.618],
                                [-398.323, -325.413],
                                [-364.934, -362.471],
                                [-262.459, -442.408],
                                [-157.976, -489.586],
                                [-69.919, -509.4],
                                [-34.849, -511.414],
                                [-29.994, -511.896],
                                [-20.997, -511.896],
                                [-14.906, -511.396],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.2, 0.2, 0.2],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [540.268, 540.289],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 1,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 12',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [0, 0, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [540, 540, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Shape 1',
                      ix: 1,
                      cix: 2,
                      np: 4,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 1,
                            k: [
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [
                                  {
                                    c: false,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-246, -36],
                                      [-57.378, -36],
                                      [200, -36],
                                    ],
                                  },
                                ],
                                t: 130,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [
                                  {
                                    c: false,
                                    i: [
                                      [0, 0],
                                      [-105, -119],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [54.253, 61.487],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-246, -36],
                                      [-46, -36],
                                      [200, -36],
                                    ],
                                  },
                                ],
                                t: 153,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.833,
                                  y: 1,
                                },
                                s: [
                                  {
                                    c: false,
                                    i: [
                                      [0, 0],
                                      [-105, -119],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [54.253, 61.487],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-246, -36],
                                      [-46, -36],
                                      [200, -36],
                                    ],
                                  },
                                ],
                                t: 178,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0,
                                },
                                i: {
                                  x: 0.833,
                                  y: 1,
                                },
                                s: [
                                  {
                                    c: false,
                                    i: [
                                      [0, 0],
                                      [-109.669, -114.711],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [87, 91],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-246, -36],
                                      [-46, -36],
                                      [200, -36],
                                    ],
                                  },
                                ],
                                t: 180,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0,
                                },
                                i: {
                                  x: 0.833,
                                  y: 1,
                                },
                                s: [
                                  {
                                    c: false,
                                    i: [
                                      [0, 0],
                                      [-126.405, -95.957],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [137, 104],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-246, -36],
                                      [-46, -36],
                                      [200, -36],
                                    ],
                                  },
                                ],
                                t: 185,
                              },
                              {
                                s: [
                                  {
                                    c: false,
                                    i: [
                                      [0, 0],
                                      [-131.404, -88.989],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [158, 107],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-246, -36],
                                      [-46, -36],
                                      [200, -36],
                                    ],
                                  },
                                ],
                                t: 192.00000782032,
                              },
                            ],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'tm',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Filter - Trim',
                          nm: 'Trim Paths 1',
                          ix: 2,
                          e: {
                            a: 1,
                            k: [
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [0],
                                t: 13,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [28],
                                t: 27,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [39],
                                t: 33,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [46],
                                t: 37,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 0.824,
                                },
                                s: [49],
                                t: 41,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0.134,
                                },
                                i: {
                                  x: 0.667,
                                  y: 0.75,
                                },
                                s: [51.756],
                                t: 44,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0.341,
                                },
                                i: {
                                  x: 0.667,
                                  y: 0.604,
                                },
                                s: [56.605],
                                t: 48,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0.44,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [66.395],
                                t: 59,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 0.843,
                                },
                                s: [76],
                                t: 71,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0.232,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [77.327],
                                t: 72,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 0.849,
                                },
                                s: [83.621],
                                t: 79,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0.205,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [84.93],
                                t: 80,
                              },
                              {
                                o: {
                                  x: 0.333,
                                  y: 0,
                                },
                                i: {
                                  x: 0.667,
                                  y: 1,
                                },
                                s: [92.64],
                                t: 88,
                              },
                              {
                                s: [100],
                                t: 96.0000039101602,
                              },
                            ],
                            ix: 2,
                          },
                          o: {
                            a: 0,
                            k: 0,
                            ix: 3,
                          },
                          s: {
                            a: 0,
                            k: 0,
                            ix: 1,
                          },
                          m: 1,
                        },
                        {
                          ty: 'st',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Stroke',
                          nm: 'Stroke 1',
                          lc: 1,
                          lj: 1,
                          ml: 4,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 4,
                          },
                          w: {
                            a: 0,
                            k: 5,
                            ix: 5,
                          },
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 3,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 2,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 15',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 104.000004236007,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [-47, -36, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [493, 504, 0],
                      ix: 2,
                    },
                    r: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [128],
                          t: 130,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [150],
                          t: 141,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [166],
                          t: 146,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [170],
                          t: 150,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [176],
                          t: 155,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [179],
                          t: 161,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [179],
                          t: 178,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [173],
                          t: 180,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [167],
                          t: 183,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [163],
                          t: 186,
                        },
                        {
                          s: [159],
                          t: 192.00000782032,
                        },
                      ],
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Shape 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 1,
                            k: [
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-109.737, -115.845],
                                      [3.597, 31.064],
                                    ],
                                  },
                                ],
                                t: 130,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-109.737, -115.845],
                                      [22.829, 62.405],
                                    ],
                                  },
                                ],
                                t: 146,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-109.737, -115.845],
                                      [29.368, 73.325],
                                    ],
                                  },
                                ],
                                t: 147,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-109.737, -115.845],
                                      [36.951, 84.416],
                                    ],
                                  },
                                ],
                                t: 150,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-109.737, -115.845],
                                      [54.052, 104.217],
                                    ],
                                  },
                                ],
                                t: 155,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-109.737, -115.845],
                                      [65.866, 116.4],
                                    ],
                                  },
                                ],
                                t: 161,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-123.018, -132.389],
                                      [65.866, 116.4],
                                    ],
                                  },
                                ],
                                t: 180,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-136.093, -153.402],
                                      [65.866, 116.4],
                                    ],
                                  },
                                ],
                                t: 183,
                              },
                              {
                                o: {
                                  x: 0.167,
                                  y: 0.167,
                                },
                                i: {
                                  x: 0.833,
                                  y: 0.833,
                                },
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-147.607, -176.11],
                                      [65.866, 116.4],
                                    ],
                                  },
                                ],
                                t: 186,
                              },
                              {
                                s: [
                                  {
                                    c: true,
                                    i: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    o: [
                                      [0, 0],
                                      [0, 0],
                                    ],
                                    v: [
                                      [-155.213, -192.068],
                                      [65.866, 116.4],
                                    ],
                                  },
                                ],
                                t: 192.00000782032,
                              },
                            ],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'st',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Stroke',
                          nm: 'Stroke 1',
                          lc: 1,
                          lj: 1,
                          ml: 4,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 4,
                          },
                          w: {
                            a: 0,
                            k: 3,
                            ix: 5,
                          },
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 3,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 3,
                },
                {
                  ty: 4,
                  nm: 'pen Outlines',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [540, 540, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 0,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 11,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 13,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 15,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 35,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 37,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 39,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 93,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 95,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 97,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 115,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 117,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 119,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 129,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 131,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 163,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 165,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 177,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 179,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 191,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 193,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [18.596, 18.596, 100],
                          t: 216,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [17, 17, 100],
                          t: 218,
                        },
                        {
                          s: [18.596, 18.596, 100],
                          t: 220.000008960784,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [664, 592, 0],
                          t: 0,
                          ti: [22.333, 4.333, 0],
                          to: [-56.667, -4.333, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [324, 566, 0],
                          t: 11,
                          ti: [-75.333, -0.667, 0],
                          to: [-22.333, -4.333, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [530, 566, 0],
                          t: 36,
                          ti: [-0.333, -0.333, 0],
                          to: [75.333, 0.667, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [776, 570, 0],
                          t: 96,
                          ti: [31.71, 0.26, 0],
                          to: [0.111, 0.111, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [641.772, 621.702, 0],
                          t: 100,
                          ti: [27.089, 0.222, 0],
                          to: [-63.267, -0.519, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [532, 568, 0],
                          t: 114,
                          ti: [2.333, 0, 0],
                          to: [-40.667, -0.333, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [445, 571, 0],
                          t: 131,
                          ti: [1.333, 3, 0],
                          to: [-2.333, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [417, 411, 0],
                          t: 159,
                          ti: [0, 0, 0],
                          to: [-1.333, -3, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [599, 647, 0],
                          t: 178,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [691, 671, 0],
                          t: 188,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [483, 729, 0],
                          t: 202,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [483, 729, 0],
                          t: 224,
                          ti: [-30.167, 22.833, 0],
                          to: [0, 0, 0],
                        },
                        {
                          s: [664, 592, 0],
                          t: 229.000009327361,
                        },
                      ],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: -31,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Group 1',
                      ix: 1,
                      cix: 2,
                      np: 6,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0.391, 15.217],
                                [15.233, -0.157],
                                [0.094, -15.253],
                                [-15.877, 0.667],
                              ],
                              o: [
                                [-0.391, -15.238],
                                [-15.256, 0.157],
                                [-0.097, 15.914],
                                [15.221, -0.638],
                              ],
                              v: [
                                [28.341, 13.28],
                                [-0.265, -14.332],
                                [-28.322, 13.835],
                                [1.168, 42.331],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 2',
                          ix: 2,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [-44.966, 0],
                                [-44.364, -0.669],
                                [0.897, 16.709],
                                [-0.08, 14.791],
                                [11.852, 0.005],
                                [92.89, 0.005],
                                [-0.031, -11.602],
                                [0.688, -15.352],
                                [-15.713, 0.185],
                              ],
                              o: [
                                [44.373, 0],
                                [16.991, 0.256],
                                [-0.792, -14.749],
                                [0.061, -11.454],
                                [-92.89, -0.036],
                                [-11.734, 0],
                                [0.042, 15.382],
                                [-0.73, 16.289],
                                [44.959, -0.53],
                              ],
                              v: [
                                [0.711, 369.553],
                                [133.829, 369.779],
                                [156.622, 346.586],
                                [156.46, 302.22],
                                [139.524, 284.274],
                                [-139.145, 284.245],
                                [-156.421, 301.837],
                                [-156.575, 347.979],
                                [-134.184, 369.74],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 3',
                          ix: 3,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [0, 93.649],
                                [1.021, -1.906],
                                [55.41, -103.242],
                                [-5.95, -15.213],
                                [-25.95, -67.989],
                                [-10.747, 0.101],
                                [-59.821, -0.624],
                                [-3.968, 10.397],
                                [-26.373, 66.554],
                                [9.504, 17.572],
                                [53.141, 99.087],
                                [3.15, 5.088],
                                [0.001, -0.957],
                                [-0.635, -88.255],
                                [-4.902, -2.869],
                                [6.239, -25.329],
                                [25.677, -0.619],
                                [6.895, 25.922],
                                [-23.064, 12.9],
                                [0.081, 11.272],
                              ],
                              o: [
                                [-4.13, 5.556],
                                [-55.336, 103.281],
                                [-7.918, 14.752],
                                [26.508, 67.775],
                                [3.738, 9.794],
                                [59.822, -0.565],
                                [11.41, 0.119],
                                [25.522, -66.884],
                                [7.334, -18.506],
                                [-53.485, -98.9],
                                [-2.334, -4.354],
                                [-1.261, 2.705],
                                [-0.068, 88.26],
                                [0.038, 5.078],
                                [24.111, 14.11],
                                [-6.218, 25.243],
                                [-26.456, 0.638],
                                [-6.582, -24.741],
                                [7.195, -4.025],
                                [-0.639, -88.824],
                              ],
                              v: [
                                [-14.208, -324.145],
                                [-20.909, -315.062],
                                [-186.892, -5.205],
                                [-188.403, 39.203],
                                [-109.521, 242.776],
                                [-90.207, 256.051],
                                [89.269, 256.072],
                                [109.819, 242.01],
                                [187.592, 41.82],
                                [184.329, -10.742],
                                [24.82, -307.955],
                                [16.493, -321.479],
                                [14.395, -316.86],
                                [14.779, -52.084],
                                [25.374, -37.238],
                                [55.376, 27.064],
                                [1.476, 70.77],
                                [-54.897, 28.033],
                                [-27.477, -35.516],
                                [-13.853, -52.841],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 4',
                          ix: 4,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: true,
                              i: [
                                [26.722, -68.854],
                                [-0.08, -35.422],
                                [0.333, -14.804],
                                [26.965, -0.086],
                                [93.606, 0.305],
                                [0.607, 27.309],
                                [-0.032, 14.811],
                                [-36.602, 4.767],
                                [1.773, 4.579],
                                [25.121, 63.245],
                                [-13.053, 24.154],
                                [-64.233, 118.681],
                                [-6.419, 6.123],
                                [-3.876, -7.174],
                                [-64.142, -118.729],
                                [10.117, -25.551],
                              ],
                              o: [
                                [37.577, 4.857],
                                [0.033, 14.811],
                                [-0.617, 27.326],
                                [-93.607, 0.297],
                                [-26.988, -0.087],
                                [-0.33, -14.805],
                                [0.078, -35.411],
                                [-1.52, -4.899],
                                [-24.578, -63.459],
                                [-10.146, -25.546],
                                [64.158, -118.722],
                                [4.017, -7.423],
                                [5.832, 6.118],
                                [64.141, 118.731],
                                [13.045, 24.147],
                                [-26.777, 67.627],
                              ],
                              v: [
                                [135.115, 254.491],
                                [184.883, 308.507],
                                [184.813, 352.939],
                                [140.43, 397.863],
                                [-140.391, 397.859],
                                [-184.786, 352.941],
                                [-184.856, 308.509],
                                [-136.083, 254.616],
                                [-140.561, 240.332],
                                [-214.596, 50.072],
                                [-209.888, -23.122],
                                [-18.04, -379.625],
                                [0.905, -398.164],
                                [18.146, -379.673],
                                [209.915, -23.129],
                                [214.625, 50.079],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'mm',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Filter - Merge',
                          nm: 'Merge Paths 1',
                          mm: 1,
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [1, 1, 1],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [539.993, 521.566],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 4,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 14',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [-244, -36, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [0, 0, 100],
                          t: 110,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 114,
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0.333,
                          },
                          i: {
                            x: 0.667,
                            y: 0.667,
                          },
                          s: [408, 506, 0],
                          t: 128,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [408, 506, 0],
                          t: 130,
                          ti: [7, 23.667, 0],
                          to: [-6.083, -25.333, 0],
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [371.5, 354, 0],
                          t: 162,
                          ti: [0, 0, 0],
                          to: [-0.45, -1.52, 0],
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [371.5, 354, 0],
                          t: 177,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [346, 378.5, 0],
                          t: 183,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          s: [328, 395, 0],
                          t: 193.000007861051,
                        },
                      ],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [30, 30],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-243, -37],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 5,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 9',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [-243, -36, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [0, 0, 100],
                          t: 7,
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [75, 75, 100],
                          t: 11,
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [291, 503.5, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [30, 30],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-243, -37],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 6,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 13',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [-244, -36, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [0, 0, 100],
                          t: 110,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 114,
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [594, 505, 0],
                          t: 132,
                          ti: [2.583, -8.583, 0],
                          to: [-0.333, 4.833, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [592, 534, 0],
                          t: 138,
                          ti: [5.167, -7.167, 0],
                          to: [-2.583, 8.583, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [578.5, 556.5, 0],
                          t: 144,
                          ti: [4, -4.083, 0],
                          to: [-5.167, 7.167, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [561, 577, 0],
                          t: 155,
                          ti: [1.083, -0.667, 0],
                          to: [-4, 4.083, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [554.5, 581, 0],
                          t: 164,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [554.5, 581, 0],
                          t: 178,
                          ti: [-11.917, -4.333, 0],
                          to: [3.917, 2.083, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [578, 593.5, 0],
                          t: 180,
                          ti: [-12.583, -3, 0],
                          to: [11.917, 4.333, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.833,
                            y: 0.833,
                          },
                          s: [626, 607, 0],
                          t: 185,
                          ti: [-4.583, -0.75, 0],
                          to: [12.583, 3, 0],
                        },
                        {
                          s: [653.5, 611.5, 0],
                          t: 191.000007779589,
                        },
                      ],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [30, 30],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-243, -37],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 7,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 11',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [-244, -36, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [0, 0, 100],
                          t: 92,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [75, 75, 100],
                          t: 96,
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [737, 508, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [30, 30],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-243, -37],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 8,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 8',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [0, 0, 0],
                      ix: 1,
                    },
                    s: {
                      a: 0,
                      k: [100, 100, 100],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [545, 540, 0],
                          t: 0,
                          ti: [-96.167, 0, 0],
                          to: [96.167, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0.167,
                          },
                          i: {
                            x: 0.667,
                            y: 0.667,
                          },
                          s: [1122, 540, 0],
                          t: 192,
                          ti: [0, 0, 0],
                          to: [0, 0, 0],
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [1122, 540, 0],
                          t: 221,
                          ti: [95.667, 0, 0],
                          to: [-95.667, 0, 0],
                        },
                        {
                          s: [548, 540, 0],
                          t: 227.0000092459,
                        },
                      ],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [88, 264],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [3.429, 14.401],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-298, 238],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 9,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 10',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [-244, -36, 0],
                      ix: 1,
                    },
                    s: {
                      a: 1,
                      k: [
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [0, 0, 100],
                          t: 36,
                        },
                        {
                          o: {
                            x: 0.167,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [75, 75, 100],
                          t: 40,
                        },
                        {
                          o: {
                            x: 0.333,
                            y: 0,
                          },
                          i: {
                            x: 0.667,
                            y: 1,
                          },
                          s: [100, 100, 100],
                          t: 221,
                        },
                        {
                          s: [0, 0, 100],
                          t: 226.000009205169,
                        },
                      ],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [493, 506, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [30, 30],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-243, -37],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 10,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 6',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [0, 0, 0],
                      ix: 1,
                    },
                    s: {
                      a: 0,
                      k: [100, 100, 100],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [1153, 541.5, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [32, 34],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [61.765, 61.765],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-313, 237],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 11,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 7',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [0, 0, 0],
                      ix: 1,
                    },
                    s: {
                      a: 0,
                      k: [100, 100, 100],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [544, 541.5, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Rectangle 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'rc',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Rect',
                          nm: 'Rectangle Path 1',
                          d: 1,
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 3,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          s: {
                            a: 0,
                            k: [32, 34],
                            ix: 2,
                          },
                        },
                        {
                          ty: 'fl',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Fill',
                          nm: 'Fill 1',
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 4,
                          },
                          r: 1,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 5,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [61.765, 61.765],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [-313, 237],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 12,
                },
                {
                  ty: 4,
                  nm: 'Shape Layer 5',
                  sr: 1,
                  st: 0,
                  op: 300.00001221925,
                  ip: 0,
                  hd: false,
                  ddd: 0,
                  bm: 0,
                  hasMask: false,
                  ao: 0,
                  ks: {
                    a: {
                      a: 0,
                      k: [0, 0, 0],
                      ix: 1,
                    },
                    s: {
                      a: 0,
                      k: [100, 100, 100],
                      ix: 6,
                    },
                    sk: {
                      a: 0,
                      k: 0,
                    },
                    p: {
                      a: 0,
                      k: [540, 540, 0],
                      ix: 2,
                    },
                    r: {
                      a: 0,
                      k: 0,
                      ix: 10,
                    },
                    sa: {
                      a: 0,
                      k: 0,
                    },
                    o: {
                      a: 0,
                      k: 100,
                      ix: 11,
                    },
                  },
                  ef: [],
                  shapes: [
                    {
                      ty: 'gr',
                      bm: 0,
                      hd: false,
                      mn: 'ADBE Vector Group',
                      nm: 'Shape 1',
                      ix: 1,
                      cix: 2,
                      np: 3,
                      it: [
                        {
                          ty: 'sh',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Shape - Group',
                          nm: 'Path 1',
                          ix: 1,
                          d: 1,
                          ks: {
                            a: 0,
                            k: {
                              c: false,
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-308, 240],
                                [304, 240],
                              ],
                            },
                            ix: 2,
                          },
                        },
                        {
                          ty: 'st',
                          bm: 0,
                          hd: false,
                          mn: 'ADBE Vector Graphic - Stroke',
                          nm: 'Stroke 1',
                          lc: 1,
                          lj: 1,
                          ml: 4,
                          o: {
                            a: 0,
                            k: 100,
                            ix: 4,
                          },
                          w: {
                            a: 0,
                            k: 3,
                            ix: 5,
                          },
                          c: {
                            a: 0,
                            k: [0.7765, 0.9882, 0.651],
                            ix: 3,
                          },
                        },
                        {
                          ty: 'tr',
                          a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1,
                          },
                          s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3,
                          },
                          sk: {
                            a: 0,
                            k: 0,
                            ix: 4,
                          },
                          p: {
                            a: 0,
                            k: [0, 0],
                            ix: 2,
                          },
                          r: {
                            a: 0,
                            k: 0,
                            ix: 6,
                          },
                          sa: {
                            a: 0,
                            k: 0,
                            ix: 5,
                          },
                          o: {
                            a: 0,
                            k: 100,
                            ix: 7,
                          },
                        },
                      ],
                    },
                  ],
                  ind: 13,
                },
              ],
              v: '4.8.0',
              fr: 29.9700012207031,
              op: 258.000010508555,
              ip: 0,
              assets: [],
            }}
          />
          <div className="flex gap-[10px] items-center">
            <StarIcon className="fill-[#a0dfb4] rotate-[20deg] md:h-[40px] md:w-[40px] group-hover:rotate-45 transition-all" />
            <p className="md:text-xl font-medium tracking-wide group-hover:text-[#c6fca6] transition-all">
              UX / UI
            </p>
          </div>
          <p className="text-sm md:text-base text-[#ffffff80] tracking-wide">
            Impactfull Visual Storytelling Mastery
          </p>
        </div>
      </div>
    </div>
  );
}
