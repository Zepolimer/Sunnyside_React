(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    39: function (n, e, t) {},
    54: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        a,
        o,
        r,
        c,
        s,
        d,
        l,
        b,
        m,
        p,
        g,
        x,
        j,
        u,
        h,
        f,
        O,
        w,
        k,
        y,
        v,
        z,
        C,
        F,
        S,
        L,
        E,
        J,
        P,
        W,
        A,
        B,
        I,
        T,
        D,
        G,
        R,
        q,
        H,
        M = t(1),
        U = t(11),
        Y = t(16),
        Z = t.n(Y),
        _ = (t(39), t(5)),
        K = t(6),
        N = t(8),
        Q = t(7),
        V = t(2),
        X = t(3),
        $ = t(34),
        nn = t(10),
        en = t(0),
        tn = X.a.nav(
          i ||
            (i = Object(V.a)([
              "\n  width: 95%;\n  margin: 0 auto;\n  padding-top: 30px;\n\n  @media(max-width: 768px){\n      transition: 0.8s all ease;\n  }\n",
            ]))
        ),
        an = X.a.div(
          a ||
            (a = Object(V.a)([
              "\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n  align-items: center;\n",
            ]))
        ),
        on = Object(X.a)(U.b)(
          o || (o = Object(V.a)(["\n  cursor: pointer;\n"]))
        ),
        rn = X.a.button(
          r ||
            (r = Object(V.a)([
              "\n  outline: none;\n  border: none;\n  background-color: transparent;\n  \n  &&:hover{\n    cursor: pointer;\n  }\n\n  @media(min-width: 768px){\n    display: none !important;\n  }\n",
            ]))
        ),
        cn = X.a.article(
          c ||
            (c = Object(V.a)([
              "\n  display: none ;\n\n  @media(min-width: 768px){\n  width: auto;\n  height: auto;\n  display: block !important;\n  background-color: transparent;\n  position: inherit;\n}\n",
            ]))
        ),
        sn = Object(X.a)(nn.Link)(
          s ||
            (s = Object(V.a)([
              "\n    text-decoration: none;\n    color: #818498;\n    font-size: 1.1em;\n    color: white;\n    padding: 0 20px;\n    cursor: pointer;\n\n    &&:hover{\n      color: #fad400;\n    }\n",
            ]))
        ),
        dn = X.a.button(
          d ||
            (d = Object(V.a)([
              "\n    outline: none;\n    border: none;\n    background-color: white;\n    padding: 15px 25px;\n    border-radius: 25px;\n    text-transform: uppercase;\n    font-family: 'Fraunces', serif;\n    cursor: pointer;\n    transition: 250ms ease-in-out;\n    \n    &&:hover{\n      background-color: rgb(135, 205, 252);\n      color: white;\n    }\n",
            ]))
        ),
        ln = function (n) {
          var e = n.toggle;
          return Object(en.jsx)(en.Fragment, {
            children: Object(en.jsx)(tn, {
              children: Object(en.jsxs)(an, {
                children: [
                  Object(en.jsx)(on, {
                    to: "/",
                    children: Object(en.jsx)("img", {
                      src: "./icon/logo.svg",
                      alt: "sunnyside",
                    }),
                  }),
                  Object(en.jsx)(rn, {
                    onClick: e,
                    children: Object(en.jsx)("img", {
                      src: "./icon/icon-hamburger.svg",
                      alt: "menu",
                    }),
                  }),
                  Object(en.jsxs)(cn, {
                    children: [
                      Object(en.jsx)(sn, { to: "about", children: "About" }),
                      Object(en.jsx)(sn, {
                        to: "services",
                        children: "Services",
                      }),
                      Object(en.jsx)(sn, {
                        to: "projects",
                        children: "Projects",
                      }),
                      Object(en.jsx)(dn, { children: "Contact" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        bn = X.a.aside(
          l ||
            (l = Object(V.a)([
              "\nwidth: auto;\n  height: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  background-color: white;\n  position: absolute;\n  top: 120px;\n  left: 10%;\n  right: 10%;\n\n  transition: 0.3s ease-in-out;\n  opacity: ",
              ";\n  top: ",
              ";\n  transform: translateY(50%);\n  z-index: 10;\n\n  @media(min-width: 768px){\n      display: none !important;\n  }\n",
            ])),
          function (n) {
            return n.isOpen ? "100%" : "0";
          },
          function (n) {
            return n.isOpen ? "0" : "-100%";
          }
        ),
        mn = Object(X.a)(nn.Link)(
          b ||
            (b = Object(V.a)([
              "\n    text-decoration: none;\n    color: #818498;\n    font-size: 1.1em;\n    cursor: pointer;\n\n    &&:hover{\n        color: #fad400;\n        border-bottom: 2px dashed #fad400;\n    }\n",
            ]))
        ),
        pn = X.a.button(
          m ||
            (m = Object(V.a)([
              "\n    outline: none;\n    border: none;\n    background-color: #fad400;\n    padding: 15px 25px;\n    border-radius: 25px;\n    text-transform: uppercase;\n    font-family: 'Fraunces', serif;\n    cursor: pointer;\n\n    &&:hover{\n        background-color: transparent;\n        border: 1px dashed black;\n    }\n\n    @media(min-width: 768px){\n      background-color: white;\n      -webkit-transition: 250ms;\n      transition: ease 250ms;\n    \n        &&:hover{\n         background-color: transparent;\n         -webkit-transition: 250ms;\n         transition: 250ms ease-in-out;\n        }\n    }\n",
            ]))
        ),
        gn = function (n) {
          var e = n.isOpen,
            t = n.toggle;
          return Object(en.jsxs)(bn, {
            isOpen: e,
            onClick: t,
            children: [
              Object(en.jsx)(mn, { to: "about", children: "About" }),
              Object(en.jsx)(mn, { to: "services", children: "Services" }),
              Object(en.jsx)(mn, { to: "projects", children: "Projects" }),
              Object(en.jsx)(pn, { children: "Contact" }),
            ],
          });
        },
        xn = function () {
          var n = Object(M.useState)(!1),
            e = Object($.a)(n, 2),
            t = e[0],
            i = e[1],
            a = function () {
              i(!t);
            };
          return Object(en.jsxs)(en.Fragment, {
            children: [
              Object(en.jsx)(gn, { isOpen: t, toggle: a }),
              Object(en.jsx)(ln, { toggle: a }),
            ],
          });
        },
        jn = X.a.header(
          p ||
            (p = Object(V.a)([
              "\n  height: 100vh;\n  background-image: url(./img/mobile/image-header.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  \n  @media (min-width: 768px){\n    height: 100vh;\n    background-image: url(./img/desktop/image-header.jpg);\n  }\n",
            ]))
        ),
        un = X.a.section(
          g ||
            (g = Object(V.a)([
              "\n  width: 85%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 30px;\n  \n  @media (min-width: 768px){\n    width: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    padding-top: 30px;\n  }\n",
            ]))
        ),
        hn = X.a.h1(
          x ||
            (x = Object(V.a)([
              "\n  text-align: center;\n  width: 100%;\n  margin: 25% auto 5% auto;\n  font-family: 'Fraunces', serif;\n  text-transform: uppercase;\n  letter-spacing: 0.5rem;\n  font-size: 3rem;\n  color: white;\n  padding-bottom: 10px;\n\n  &&:hover {\n    cursor:grab;\n  }\n  \n  @media(max-width: 320px){\n          font-size: 1.6rem;\n  }\n",
            ]))
        ),
        fn = (function (n) {
          Object(N.a)(t, n);
          var e = Object(Q.a)(t);
          function t() {
            return Object(_.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(K.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(en.jsxs)(jn, {
                    children: [
                      Object(en.jsx)(un, { children: Object(en.jsx)(xn, {}) }),
                      Object(en.jsx)(hn, { children: "We are creatives" }),
                      Object(en.jsx)("img", {
                        id: "arrowDown",
                        src: "./icon/icon-arrow-down.svg",
                        alt: "go down",
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(M.Component),
        On = X.a.section(
          j ||
            (j = Object(V.a)([
              "\n  @media(min-width: 768px){\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 50% 50%;\n        grid-template-columns: 50% 50%;\n    -ms-grid-rows: 75vh 75vh 75vh;\n        grid-template-rows: 75vh 75vh 75vh; \n  }\n",
            ]))
        ),
        wn = X.a.article(
          u ||
            (u = Object(V.a)([
              "\n  width: 100%;\n  height: 300px;\n  background-image: url(./img/mobile/image-transform.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n\n  @media(min-width: 768px){\n    -ms-grid-column: 2;\n    grid-column: 2;\n    -ms-grid-row: 1;\n    grid-row: 1;\n    width: 100%;\n    height: 100%;\n    background-image: url(./img/desktop/image-transform.jpg);\n  }\n",
            ]))
        ),
        kn = X.a.article(
          h ||
            (h = Object(V.a)([
              "\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n\n  @media(min-width:768px){\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: left;\n    padding: 0 7vw 0 10vw;\n  }\n",
            ]))
        ),
        yn = X.a.article(
          f ||
            (f = Object(V.a)([
              "\n  width: 100%;\n  height: 300px;\n  background-image: url(./img/mobile/image-stand-out.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n\n  @media(min-width:768px){\n    width: 100%;\n    height: 100%;\n    background-image: url(./img/desktop/image-stand-out.jpg);\n  }\n",
            ]))
        ),
        vn = X.a.article(
          O ||
            (O = Object(V.a)([
              "\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n\n    @media(min-width:768px){\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: left;\n    padding: 0 10vw 0 7.6vw;\n  }  \n",
            ]))
        ),
        zn = X.a.h2(
          w ||
            (w = Object(V.a)([
              "\n  font-family: 'Fraunces', serif;\n  font-size: 2.5em;\n  padding-top: 30px;\n\n  @media(min-width:768px){\n    font-size: 2.6em;\n    font-weight: 900;\n    padding-top: 0px;\n  }\n",
            ]))
        ),
        Cn = X.a.p(
          k ||
            (k = Object(V.a)([
              "\n    font-size: 1.3em;\n    line-height: 1.8em;\n    color: #818498;\n    padding: 0 20px;\n\n  @media(min-width:768px){\n    font-size: 1.15em;\n      line-height: 1.8em;\n      padding: 0 0px;\n  }\n",
            ]))
        ),
        Fn = X.a.a(
          y ||
            (y = Object(V.a)([
              "\n  text-decoration: none;\n  font-family: 'Fraunces', serif;\n  text-transform: uppercase;\n  color: #23303e;\n  padding-bottom: 50px;\n  @media(min-width:768px){\n    padding-bottom: 0px;\n  }\n",
            ]))
        ),
        Sn = X.a.article(
          v ||
            (v = Object(V.a)([
              "\n  height: 600px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  background-image: url(./img/mobile/image-graphic-design.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #25564b;\n\n  @media(min-width: 768px){\n    background-image: url(./img/desktop/image-graphic-design.jpg);\n  }\n",
            ]))
        ),
        Ln = X.a.article(
          z ||
            (z = Object(V.a)([
              "\n  height: 600px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n\n  background-image: url(./img/mobile/image-photography.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #25564b;\n\n  @media(min-width: 768px){\n    background-image: url(./img/desktop/image-photography.jpg);\n  }\n",
            ]))
        ),
        En = X.a.h2(
          C ||
            (C = Object(V.a)([
              "\n  font-family: 'Fraunces', serif;\n  text-transform: capitalize;\n  font-size: 2em;\n\n  @media(min-width: 768px){\n    font-size: 1.7em;\n    font-weight: 900;\n  }\n",
            ]))
        ),
        Jn = X.a.p(
          F ||
            (F = Object(V.a)([
              "\n text-align: center;\n  font-size: 1.1em;\n  padding: 0 15px 30px 15px;\n  line-height: 1.5em;\n\n  @media(min-width: 768px){\n    font-size: 1em;\n    padding: 0 25% 30px 25%;\n  }\n",
            ]))
        ),
        Pn = (function (n) {
          Object(N.a)(t, n);
          var e = Object(Q.a)(t);
          function t() {
            return Object(_.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(K.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(en.jsx)("div", {
                    id: "about",
                    children: Object(en.jsxs)(On, {
                      children: [
                        Object(en.jsx)(wn, {
                          "data-aos": "fade-in",
                          "data-aos-duration": "2000",
                        }),
                        Object(en.jsxs)(kn, {
                          "data-aos": "fade-left",
                          "data-aos-duration": "1500",
                          children: [
                            Object(en.jsx)(zn, {
                              children: "Transform your brand",
                            }),
                            Object(en.jsx)(Cn, {
                              children:
                                "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
                            }),
                            Object(en.jsx)(Fn, {
                              href: "https://www.frontendmentor.io/solutions",
                              children: "Learn more",
                            }),
                          ],
                        }),
                        Object(en.jsx)(yn, {
                          "data-aos": "fade-in",
                          "data-aos-duration": "2000",
                        }),
                        Object(en.jsxs)(vn, {
                          "data-aos": "fade-right",
                          "data-aos-duration": "1500",
                          children: [
                            Object(en.jsx)(zn, {
                              children: "Stand out to the right audience",
                            }),
                            Object(en.jsx)(Cn, {
                              children:
                                "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we\u2019ll build and extend your brand in digital places.",
                            }),
                            Object(en.jsx)(Fn, {
                              href: "https://www.frontendmentor.io/solutions",
                              children: "Learn more",
                            }),
                          ],
                        }),
                        Object(en.jsxs)(Sn, {
                          "data-aos": "fade-up",
                          "data-aos-duration": "1200",
                          children: [
                            Object(en.jsx)(En, { children: "Graphic design" }),
                            Object(en.jsx)(Jn, {
                              children:
                                "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients\u2019 attention.",
                            }),
                          ],
                        }),
                        Object(en.jsxs)(Ln, {
                          "data-aos": "fade-up",
                          "data-aos-duration": "1200",
                          children: [
                            Object(en.jsx)(En, { children: "Photography" }),
                            Object(en.jsx)(Jn, {
                              children:
                                "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            t
          );
        })(M.Component),
        Wn = X.a.section(
          S ||
            (S = Object(V.a)([
              "\n  text-align: center;\n  font-family: 'Fraunces', serif;\n  font-weight: 900;\n  font-size: 1.2em;\n  color: #a7abae;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  padding-top: 50px;\n  \n  @media(min-width:768px){\n    padding-top: 150px;\n  }\n",
            ]))
        ),
        An = X.a.section(
          L ||
            (L = Object(V.a)([
              "\n  @media(min-width: 758px){\n    width: 80%;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-bottom: 70px;\n  }\n",
            ]))
        ),
        Bn = X.a.article(
          E ||
            (E = Object(V.a)([
              "\n  width: 80%;\n  margin: 75px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n\n  img {\n    width: 80px;\n    height: auto;\n    border-radius: 50%;\n  }\n\n  @media(min-width: 768px){\n    img {\n      width: 70px;\n      margin-bottom: 50px;\n    }\n  }\n",
            ]))
        ),
        In = X.a.p(
          J ||
            (J = Object(V.a)([
              "\n  font-size: 1.1em;\n  padding: 0 5px;\n  line-height: 1.5em;\n  color: #818498;\n\n  @media(min-width: 768px){\n    padding: 0 18px;\n    line-height: 1.7em;\n  }\n",
            ]))
        ),
        Tn = X.a.p(
          P ||
            (P = Object(V.a)([
              "\n  font-family: 'Fraunces', serif;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  color: #23303e;\n  \n  span {\n    font-family: 'Barlow', sans-serif;\n    font-size: .8em;\n    font-weight: lighter;\n    color: #a7abae;\n  }\n",
            ]))
        ),
        Dn = (function (n) {
          Object(N.a)(t, n);
          var e = Object(Q.a)(t);
          function t() {
            return Object(_.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(K.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(en.jsxs)(en.Fragment, {
                    children: [
                      Object(en.jsx)(Wn, {
                        id: "services",
                        children: "Client testimonials",
                      }),
                      Object(en.jsxs)(An, {
                        children: [
                          Object(en.jsxs)(Bn, {
                            "data-aos": "fade-up",
                            "data-aos-easing": "ease-out-cubic",
                            "data-aos-duration": "1800",
                            children: [
                              Object(en.jsx)("img", {
                                src: "./img/image-emily.jpg",
                                alt: "Emily",
                              }),
                              Object(en.jsx)(In, {
                                children:
                                  "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
                              }),
                              Object(en.jsxs)(Tn, {
                                children: [
                                  "Emily R.",
                                  Object(en.jsx)("br", {}),
                                  Object(en.jsx)("span", {
                                    children: "Marketing Director",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(en.jsxs)(Bn, {
                            "data-aos": "fade-up",
                            "data-aos-easing": "ease-out-sine",
                            "data-aos-duration": "1800",
                            children: [
                              Object(en.jsx)("img", {
                                src: "./img/image-thomas.jpg",
                                alt: "Thomas",
                              }),
                              Object(en.jsx)(In, {
                                children:
                                  "Sunnyside\u2019s enthusiasm coupled with their keeninterest in our brand\u2019s success made it a satisfying and enjoyable experience.",
                              }),
                              Object(en.jsxs)(Tn, {
                                children: [
                                  "Thomas S.",
                                  Object(en.jsx)("br", {}),
                                  Object(en.jsx)("span", {
                                    children: "Chief Operating Officer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(en.jsxs)(Bn, {
                            "data-aos": "fade-up",
                            "data-aos-easing": "ease-out-cubic",
                            "data-aos-duration": "1800",
                            children: [
                              Object(en.jsx)("img", {
                                src: "./img/image-jennie.jpg",
                                alt: "Jennie",
                              }),
                              Object(en.jsx)(In, {
                                children:
                                  "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
                              }),
                              Object(en.jsxs)(Tn, {
                                children: [
                                  "Jennie F.",
                                  Object(en.jsx)("br", {}),
                                  Object(en.jsx)("span", {
                                    children: "Business Owner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(M.Component),
        Gn = X.a.section(
          W ||
            (W = Object(V.a)([
              "\n  width: 100%;\n  height: 450px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% 50%;\n      grid-template-columns: 50% 50%;\n  -ms-grid-rows: 225px 225px;\n      grid-template-rows: 225px 225px;\n      \n  @media(min-width:768px){\n    width: 100%;\n    height: 56.5vh;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 25% 25% 25% 25%;\n        grid-template-columns: 25% 25% 25% 25%;\n    -ms-grid-rows: 56.5vh;\n        grid-template-rows: 56.5vh;\n  }\n",
            ]))
        ),
        Rn = X.a.article(
          A ||
            (A = Object(V.a)([
              "\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(./img/mobile/image-gallery-milkbottles.jpg);\n\n  &&:hover{\n    transform: scale(0.9);\n    transition: 400ms ease-in-out;\n  }\n\n    @media(min-width:768px){\n        background-image: url(./img/desktop/image-gallery-milkbottles.jpg);\n    }\n",
            ]))
        ),
        qn = X.a.article(
          B ||
            (B = Object(V.a)([
              "\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(./img/mobile/image-gallery-orange.jpg);\n\n  &&:hover{\n    transform: scale(0.9);\n    transition: 400ms ease-in-out;\n  }\n\n    @media(min-width:768px){\n        background-image: url(./img/desktop/image-gallery-orange.jpg);\n    }\n",
            ]))
        ),
        Hn = X.a.article(
          I ||
            (I = Object(V.a)([
              "\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(./img/mobile/image-gallery-cone.jpg);\n\n  &&:hover{\n    transform: scale(0.9);\n    transition: 400ms ease-in-out;\n  }\n\n    @media(min-width:768px){\n        background-image: url(./img/desktop/image-gallery-cone.jpg);\n    }\n",
            ]))
        ),
        Mn = X.a.article(
          T ||
            (T = Object(V.a)([
              "\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url(./img/mobile/image-gallery-sugar-cubes.jpg);\n\n  &&:hover{\n    transform: scale(0.9);\n    transition: 400ms ease-in-out;\n  }\n\n    @media(min-width:768px){\n        background-image: url(./img/desktop/image-gallery-sugarcubes.jpg);\n    }\n",
            ]))
        ),
        Un = (function (n) {
          Object(N.a)(t, n);
          var e = Object(Q.a)(t);
          function t() {
            return Object(_.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(K.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(en.jsxs)(Gn, {
                    id: "projects",
                    children: [
                      Object(en.jsx)(Rn, {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1800",
                      }),
                      Object(en.jsx)(qn, {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1800",
                      }),
                      Object(en.jsx)(Hn, {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1800",
                      }),
                      Object(en.jsx)(Mn, {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1800",
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(M.Component),
        Yn = X.a.footer(
          D ||
            (D = Object(V.a)([
              "\n  width: 100%;\n  color: #458c7e;\n  background-color: #90d4c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n",
            ]))
        ),
        Zn = X.a.section(
          G ||
            (G = Object(V.a)([
              "\n  width: 66%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 60px;\n\n  @media(min-width:768px){\n    width: 300px;\n    font-size: 1.1em;\n  }\n",
            ]))
        ),
        _n = Object(X.a)(nn.Link)(
          R ||
            (R = Object(V.a)([
              "\n  text-decoration: none;\n  color: #458c7e;\n  cursor: pointer;\n\n  &&:hover{\n    color: white;\n    border-bottom: 2px dashed white;\n  }\n",
            ]))
        ),
        Kn = X.a.section(
          q ||
            (q = Object(V.a)([
              "\n  width: 40%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n     -ms-flex-pack: justify;\n        justify-content: space-between;\n  align-items: center;\n  padding-bottom: 50px;\n\n  a:hover {\n      transform: scale(1.25);\n      border-bottom: 2px dashed #fad400;\n  }\n\n  @media(min-width:768px){\n    width: 170px;\n  }\n",
            ]))
        ),
        Nn = X.a.p(
          H ||
            (H = Object(V.a)([
              "\n  color:white;\n\n  a {\n    color: #458c7e;\n    text-decoration:none;\n  }\n  a:hover{\n    color: #fad400;\n  }\n",
            ]))
        ),
        Qn = (function (n) {
          Object(N.a)(t, n);
          var e = Object(Q.a)(t);
          function t() {
            return Object(_.a)(this, t), e.apply(this, arguments);
          }
          return (
            Object(K.a)(t, [
              {
                key: "render",
                value: function () {
                  return Object(en.jsxs)(Yn, {
                    children: [
                      Object(en.jsx)("img", {
                        id: "footerLogo",
                        src: "./icon/logo.svg",
                        alt: "sunnyside",
                      }),
                      Object(en.jsxs)(Zn, {
                        children: [
                          Object(en.jsx)(_n, {
                            to: "about",
                            children: "About",
                          }),
                          Object(en.jsx)(_n, {
                            to: "services",
                            children: "Services",
                          }),
                          Object(en.jsx)(_n, {
                            to: "projects",
                            children: "Projects",
                          }),
                        ],
                      }),
                      Object(en.jsxs)(Kn, {
                        children: [
                          Object(en.jsx)("a", {
                            href: "",
                            children: Object(en.jsx)("img", {
                              src: "./icon/icon-facebook.svg",
                              alt: "facebook",
                            }),
                          }),
                          Object(en.jsx)("a", {
                            href: "",
                            children: Object(en.jsx)("img", {
                              src: "./icon/icon-instagram.svg",
                              alt: "instagram",
                            }),
                          }),
                          Object(en.jsx)("a", {
                            href: "",
                            children: Object(en.jsx)("img", {
                              src: "./icon/icon-twitter.svg",
                              alt: "twitter",
                            }),
                          }),
                          Object(en.jsx)("a", {
                            href: "",
                            children: Object(en.jsx)("img", {
                              src: "./icon/icon-pinterest.svg",
                              alt: "pinterest",
                            }),
                          }),
                        ],
                      }),
                      Object(en.jsxs)(Nn, {
                        children: [
                          "Coded by ",
                          Object(en.jsx)("a", {
                            href:
                              "https://github.com/Zepolimer?tab=repositories",
                            target: "_blank",
                            children: "R\xe9mi Lopez",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            t
          );
        })(M.Component),
        Vn = t(33),
        Xn = t.n(Vn),
        $n =
          (t(53),
          function () {
            return (
              Xn.a.init(),
              Object(en.jsxs)(U.a, {
                children: [
                  Object(en.jsx)(fn, {}),
                  Object(en.jsx)(Pn, {}),
                  Object(en.jsx)(Dn, {}),
                  Object(en.jsx)(Un, {}),
                  Object(en.jsx)(Qn, {}),
                ],
              })
            );
          });
      Z.a.render(
        Object(en.jsx)(U.a, { children: Object(en.jsx)($n, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[54, 1, 2]],
]);
//# sourceMappingURL=main.8cdf9b63.chunk.js.map
