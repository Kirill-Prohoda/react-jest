import st from "./header.module.scss"
const Header = () =>{
  return(
<header className={st.header}>
<nav>
  <ul>
    <li>
      home
    </li>
    <li>
      app
    </li>
    <li>
      about
    </li>
  </ul>
</nav>
</header>
  )
}

export default Header