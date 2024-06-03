import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroBullets.module.css";
import { Link } from "react-router-dom";
import React from "react";
import Booking from "../Booking";


export function HeroBullets() {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${"https://media.istockphoto.com/id/1134305610/photo/reflection-of-a-bubble-in-rainbow-colors-on-a-black-background.jpg?s=612x612&w=0&k=20&c=Yx0iAgpsyJYNPta9Z1UAX3Ytjv0Dotc-1ITfOjulY9w="})`,
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "white", to: "gold" }}
              >Contact.<br/>
                Let's Talk Mineral.
              </Text>{" "}
              
            </Title>

            <Text className={classes.description} mt={30}>
             

            </Text>

            <div className="flex justify-start mt-4 space-x-4">
              <div className="flex justify-start mt-4 space-x-4">
                <Link to="/">
                  <button
                    className="bg-blue-500 fw-500 text-white px-4 py-2 rounded-xl  "
                    style={{ margin: "auto", background: "black", border:"white 2px solid" }}
                  >
                    Buying
                  </button>
                </Link>
              </div>

              <div className="flex justify-start mt-4 space-x-4">
                <Link to="/providers">
                  <button
                    className="bg-blue-500  text-white px-4 py-2 rounded-xl  "
                    style={{ margin: "auto", background: "black", border:"white 2px solid" }}
                  >
                    Selling
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
