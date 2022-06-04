import React, { Component } from 'react';
import Sprite from '../assets/sprite.svg'

class Home extends Component {
    render() { 
        return ( 
            <div className='overlay'>
                <h1>Jonathan Plaisted</h1>
                <h2>WORK WITH ME</h2>
                <div className="container media__container">
                    <span className="icon-container">
                    <a href="https://jonathanplaisted.com"><h3>JP</h3></a>
                    </span>
                    <span className="icon-container">
                    <a href="https://www.linkedin.com/in/jonathan-plaisted/">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#linkedin`}/>
                      </svg>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://github.com/JAPlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#github`}/>
                      </svg>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://codepen.io/japlaisted">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#codepen`}/>
                      </svg>
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
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://www.instagram.com/initrandom/">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#instagram`}/>
                      </svg>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://www.facebook.com/jonathan.plaisted.7/">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#facebook`}/>
                      </svg>
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://twitter.com/cssslinger">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#twitter`}/>
                      </svg>
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
                     </a>
                  </span>
                  <span className="icon-container">
                    <a href="https://discord.com/channels/964646317144043550/964646317773185085">
                      <svg className='icon'>
                        <use xlinkHref={`${Sprite}#discord`}/>
                      </svg>
                     </a>
                  </span>
                </div>
            </div>
         );
    }
}
 
export default Home;