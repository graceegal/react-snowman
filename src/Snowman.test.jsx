import { it, expect } from "vitest";
import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
    render(
        <Snowman
            images={TEST_IMAGES}
            words={["apple"]}
        />
    );
});

it("last image stays on page once game is lost", function () {
    const { container, debug } = render(
        <Snowman
            images={TEST_IMAGES}
            words={["apple"]}
        />
    );

    // make 6 wrong letter guesses
    const rBtn = container.querySelector('button[value="r"]');
    fireEvent.click(rBtn);

    const bBtn = container.querySelector('button[value="b"]');
    fireEvent.click(bBtn);

    const qBtn = container.querySelector('button[value="q"]');
    fireEvent.click(qBtn);

    const xBtn = container.querySelector('button[value="x"]');
    fireEvent.click(xBtn);

    const zBtn = container.querySelector('button[value="z"]');
    fireEvent.click(zBtn);

    const yBtn = container.querySelector('button[value="y"]');
    fireEvent.click(yBtn);

    debug()

    expect(
        container.querySelector('img[alt="6"]')
    ).toBeInTheDocument();
})