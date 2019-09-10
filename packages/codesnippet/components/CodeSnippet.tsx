import * as React from "react";
import { MonospaceText } from "../../styleUtils/typography";
import { SpacingBox } from "../../styleUtils/modifiers";
import { Flex, FlexItem } from "../../styleUtils/layout";
import {
  greyDark,
  themeTextColorPrimaryInverted
} from "../../design-tokens/build/js/designTokens";
import { ClickToCopyButton } from "../../clicktocopybutton";

export interface CodeSnippetProps {
  children?: string;

  /**
   * This is what will end up on the user's clipboard
   */
  textToCopy?: string;

  /**
   * Function to execute after text has been copied
   */
  onCopy?: () => void;
}

const CodeSnippet = ({ children, textToCopy, onCopy }: CodeSnippetProps) => {
  return (
    <SpacingBox bgColor={greyDark}>
      <Flex>
        <FlexItem>
          <MonospaceText color={themeTextColorPrimaryInverted}>
            {children}
          </MonospaceText>
        </FlexItem>
        {textToCopy ? (
          <FlexItem flex="shrink">
            <ClickToCopyButton
              textToCopy={textToCopy}
              onCopy={onCopy}
              color={themeTextColorPrimaryInverted}
            />
          </FlexItem>
        ) : null}
      </Flex>
    </SpacingBox>
  );
};

export default CodeSnippet;
