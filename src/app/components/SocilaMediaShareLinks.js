import React, { Component } from "react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon
} from "react-share";

export default class SocilaMediaShareLinks extends Component {
  render() {
    return (
      <div>
        <div className="share-links-wrap">
          <p className="text-header small">Share this:</p>

          <ul className="share-links hoverable">
            <li>
              <a>
                <FacebookShareButton
                  url={"sdfsdf"}
                  quote={"arulraj"}
                  className="fb"
                >
                  &nbsp;
                </FacebookShareButton>
              </a>
            </li>
            <li>
              <a href="/" className="twt">
                &nbsp;
              </a>
            </li>
            <li>
              <a href="/" className="db">
                &nbsp;
              </a>
            </li>
            <li>
              <a href="/" className="rss">
                &nbsp;
              </a>
            </li>
            <li>
              <a href="/" className="gplus">
                &nbsp;
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
