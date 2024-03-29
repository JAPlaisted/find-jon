import React, { Component } from 'react';
import Sprite from '../assets/sprite.svg'

class Home extends Component {
    render() { 
        return ( 
            <div className='overlay'>
              <img className='profile' src="https://cdn.midjourney.com/a2619c3c-66fa-4fb8-bd1f-3d7405bad6a7/grid_0.png" alt="Man in hot air balloon" />
                <h1>Jonathan Plaisted</h1>
                <h2>WORK WITH ME</h2>
                <div className="container media__container">
                    <span className="icon-container">
                    <a href="https://jonathanplaisted.com"><h3>Portfolio</h3></a>
                    </span>
                    <span className="icon-container">
                    <a href="https://www.linkedin.com/in/jonathan-plaisted/">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#linkedin`}/>
                      </svg>
                      <h4>LinkedIn</h4>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://github.com/JAPlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#github`}/>
                      </svg>
                      <h4>GitHub</h4>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://codepen.io/japlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#codepen`}/>
                      </svg>
                      <h4>CodePen</h4>
                     </a>
                  </span>
                </div>

                <h2>CONNECT WITH ME</h2>
                <div className="container media__container">
                    <span className="icon-container">
                    <a href="https://www.youtube.com/channel/UC0DfJMEOlTu8KuBR9vdE05A">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#youtube`}/>
                      </svg>
                      <h4>YouTube</h4>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://twitter.com/cssslinger">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#twitter`}/>
                      </svg>
                      <h4>Twitter</h4>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://www.instagram.com/initrandom/">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#instagram`} />
                      </svg>
                      <h4>Instagram</h4>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://www.facebook.com/jonathan.plaisted.7/">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#facebook`}/>
                      </svg>
                      <h4>Facebook</h4>
                     </a>
                  </span>
                </div>

                <h2>CONTACT ME</h2>
                <div className="container media__container">
                  <span className="icon-container">
                    <a href="mailto: jonathan.plaisted@outlook.com">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#email`}/>
                      </svg>
                      <h4>Email</h4>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://discord.com/channels/964646317144043550/964646317773185085">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#discord`}/>
                      </svg>
                      <h4>Discord</h4>
                     </a>
                  </span>
                </div>
            </div>
         );
    }
}
 
export default Home;