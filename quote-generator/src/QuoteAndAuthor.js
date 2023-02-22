

import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    return (
      <body>
        <div id="wrapper">
          <div id="quote-box">
            <div id="quote-text">
            <h1 id="text">"{this.props.quote}"</h1>
            </div>
            <div id="quote-author">
            <h5 id="author">
              {this.props.author ? this.props.author : "Unknown"}
            </h5>
            </div>
  
            <div id="buttons"><button id = "quotebutton" onClick={this.props.handleClick}>New Quote</button><a id = "tweet-quote" href = "https://twitter.com/intent/tweet">Tweet this Quote!</a></div>
          </div>
        </div>
        
      </body>
    );
  }
}

export default QuoteAndAuthor;

