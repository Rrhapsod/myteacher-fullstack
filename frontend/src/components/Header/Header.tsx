import { HeaderContainer, Logo } from "./Header.style";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/myteacher.png" />
      </div>
      <p>Encontre o professor perfeito!</p>
    </HeaderContainer>
  );
}
