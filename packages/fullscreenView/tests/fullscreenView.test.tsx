import React from "react";
import { mount } from "enzyme";
import { createSerializer } from "@emotion/jest";
import toJson from "enzyme-to-json";
import FullscreenView from "../components/FullscreenView";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(createSerializer());

describe("FullscreenView", () => {
  it("renders FullscreenView", () => {
    const closeAction = jest.fn();
    const component = mount(
      <FullscreenView
        onClose={closeAction}
        ctaButton={<PrimaryButton>CTA</PrimaryButton>}
        closeText="Close"
        title="Title"
      >
        <div tabIndex={0}>I am modal content</div>
      </FullscreenView>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
