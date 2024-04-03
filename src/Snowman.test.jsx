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

it("matches snapshot at initial render", function () {
    const { container } = render(
        <Snowman
            images={TEST_IMAGES}
            words={["apple"]}
        />
    );

    expect(container).toMatchSnapshot();
});

it("Game lost: last image stays on page, losing message is displayed, buttons are not visible", function () {
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

    debug();

    expect(
        container.querySelector('img[alt="6"]')
    ).toBeInTheDocument();

    expect(
        container.querySelector('.letter')
    ).toHaveStyle('visibility: hidden');


    expect(
        container.querySelector('.lose-msg')
    ).toHaveStyle('visibility: visible');


});

it("Game lost: matches snapshot", function () {
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


    expect(container).toMatchSnapshot();

});



