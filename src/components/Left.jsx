import React, { Component, PropTypes } from 'react'
import Masonry from 'react-masonry-component';
import Podcast from './Podcast.jsx';
import podcasts from '../data/podcasts';

export default class Left extends Component {
  render() {
    return (
      <div>
        Left Side
          <Masonry>
          {podcasts.map((item, i) => (
            <div key={i}>
              <Podcast item={item} />
            </div>
          ))}
          </Masonry>
      </div>
    )
  }
}
