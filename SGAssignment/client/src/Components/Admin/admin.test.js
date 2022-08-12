import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Admin from "./admin";

Enzyme.configure({ adapter: new Adapter() });

describe("admin", () => {
  it("should show text", () => {
    const wrapper = shallow(<Admin />);
    const text = wrapper.find("div div");
    expect(text.text()).toBe("Text goes here");
  });

  it("should hide text when button is clicked", () => {
    const wrapper = shallow(<Admin />);
    const button = wrapper.find("button");
    button.simulate("click");
    const text = wrapper.find("div div");
    expect(text.length).toBe(0);
  });
});
