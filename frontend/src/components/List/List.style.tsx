import { styled } from "@mui/material";

export const ListStyled = styled("ul")`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(9)};

  ${({ theme }) => theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ListItem = styled("li")`
  list-style: none;
`;

export const Image = styled("img")`
  width: 100%;
`;

export const Info = styled("div")``;

export const Name = styled("h3")`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;

export const Value = styled("p")`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const Description = styled("p")`
  word-break: break-word;
`;
