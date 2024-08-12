import { FC, Fragment, ReactNode } from "react";
import { Logo } from "~/presentation/components/Logo";
import Styled from "./styled";

export interface AppLayoutProps {
  children?: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Styled.PageWrapper>
        <Styled.PageHeader>
          <Logo />
        </Styled.PageHeader>

        <Styled.PageContainer>{children}</Styled.PageContainer>
      </Styled.PageWrapper>
    </Fragment>
  );
};
