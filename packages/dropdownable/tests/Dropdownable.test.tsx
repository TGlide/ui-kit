import React from "react";
import { createSerializer } from "@emotion/jest";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

const mockEventManager = {
  add: jest.fn(),
  remove: jest.fn()
};

jest.doMock("../../utilities/resizeEventManager", () => {
  return mockEventManager;
});

import Dropdownable from "../components/Dropdownable";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(createSerializer());

describe("Dropdownable", () => {
  it("is visible after opening", () => {
    const component = mount(
      <Dropdownable isOpen={false} dropdown={<p>I am a touchdown</p>}>
        <PrimaryButton>Click me</PrimaryButton>
      </Dropdownable>
    );

    expect(toJson(component)).toMatchSnapshot();
    component.setProps({ isOpen: true });
    expect(toJson(component)).toMatchSnapshot();
  });
});
