import {Story} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";
import {BrowserRouter} from "react-router-dom";

export const RouterDecorator = (story: () => Story) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    )
}