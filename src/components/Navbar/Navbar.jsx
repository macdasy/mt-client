
export default function Navbar(props) {

  return (
      <nav class="uk-navbar-container">
        <div class="uk-container">
            <div data-uk-navbar>

                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active">
                          <a href="."> 
                            <h3 style={{margin:0, fontWeight:700}}> Macro<span style={{color:'#9778DB'}}>Touch</span> </h3> 
                          </a>
                        </li>
                    </ul>
                </div>
                
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="."> Home </a></li>
                        <li class="uk-active"><a href="."> Login </a></li>
                    </ul>
                </div>

            </div>
        </div>
    </nav>
  );
}
