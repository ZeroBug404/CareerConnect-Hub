"use client";

import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import { Col, Divider, Row } from "antd";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
          backgroundColor: "#EEEEEE",
        }}
      >
        <Col
          sm={20}
          md={23}
          lg={18}
          style={{
            backgroundColor: "white",
            borderRadius: ".5rem",
            padding: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <h1 style={{ color: "#2D8209" }}>Contact information</h1>
          <Divider />
          <p style={{ color: "#2F66B8", marginBottom: ".8rem" }}>
            Dial{" "}
            <span
              style={{
                color: "#FF0000",
                fontSize: "1.3rem",
                fontWeight: "bold",
              }}
            >
              16479, 09612444888
            </span>{" "}
            from any number.
          </p>
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>N.B.</span> Our Contact Centre
            is available from 9 am to 8 pm (Saturday to Thursday).
          </p>
          <Divider />
          <p>IP phone: +88 09612444888 from any number.</p>
          <div style={{ marginTop: "1.5rem" }}>
            <h1>Find Us</h1>
            <h2 style={{ margin: "1.2rem 0" }}>
              Career Connect Hub (Head Office)
            </h2>
            <p style={{ marginBottom: ".3rem" }}>8th Floor - West</p>
            <p style={{ marginBottom: ".3rem" }}>BDBL Building (Old BSRS)</p>
            <p style={{ marginBottom: ".3rem" }}>12, Kawran Bazar C/A</p>
            <p style={{ marginBottom: ".3rem" }}>Dhaka-1215</p>
            <p style={{ marginBottom: ".3rem" }}>Bangladesh</p>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <h2 style={{ margin: "1.2rem 0" }}>
              Career Connect Hub (Local Office)
            </h2>
            <p style={{ marginBottom: ".3rem" }}>3th Floor </p>
            <p style={{ marginBottom: ".3rem" }}>Bibir Puskonir Par</p>
            <p style={{ marginBottom: ".3rem" }}>Sadar Road</p>
            <p style={{ marginBottom: ".3rem" }}>Barishal-1115</p>
            <p style={{ marginBottom: ".3rem" }}>Bangladesh</p>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Contact;