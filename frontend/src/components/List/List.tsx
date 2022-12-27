import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import {
  Description,
  Image,
  Info,
  ListItem,
  ListStyled,
  Name,
  Value,
} from "./List.style";

interface ListProps {
  professors: Professor[];
  onSelect: (professor: Professor) => void;
}

export function List({ professors, onSelect }: ListProps) {
  return (
    <ListStyled>
      {professors.map((professor) => (
        <ListItem key={professor.id}>
          <Image src={professor.foto} alt="Foto do professor" />
          <Info>
            <Name>{professor.nome}</Name>
            <Value>
              {FormatadorService.valorMonetario(professor.valor_hora)}
              /hora
            </Value>
            <Description>
              {FormatadorService.limitarTexto(professor.descricao, 200)}
            </Description>
            <Button sx={{ width: "70%" }} onClick={() => onSelect(professor)}>
              Marcar aula com {professor.nome}
            </Button>
          </Info>
        </ListItem>
      ))}
    </ListStyled>
  );
}
