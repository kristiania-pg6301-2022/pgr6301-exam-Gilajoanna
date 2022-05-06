import * as ReactDOM from "react-dom";
import * as React from "react";
import { UserProfile } from "../components/userProfile";
import { act } from "react-dom/test-utils";

describe("UserProfile component", () => {
  it("renders UserProfile", () => {
    const element = document.createElement("div");
    ReactDOM.render(<UserProfile />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });

  it("shows error in user profile", async () => {
    const element = document.createElement("div");
    await act(async () => {
      ReactDOM.render(
        <UserProfile
          user={() => {
            throw new Error("Error! ReferenceError: fetch is not defined");
          }}
        />,
        element
      );
    });
    expect(element.querySelector("#error-message").innerHTML).toEqual(
      "Error! ReferenceError: fetch is not defined"
    );
    expect(element.innerHTML).toMatchSnapshot();
  });
});
