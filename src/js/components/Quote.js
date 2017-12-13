// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';

// ----------------------------------------------
// Quote
// ----------------------------------------------
class Quote extends Component {
  quote() {
    const quotes = [
      // {
      //   quote: 'Don\'t watch the market closely.',
      //   cite : 'Warren Buffet'
      // },
      // {
      //   quote: 'When directly compared or weighted against each other, losses look larger than gains.',
      //   cite : 'Daniel Kahneman'
      // },
      {
        quote: 'Being emotional, he feels a pang with every loss, as it shows in red on his screen. He feels some pleasure when the performance is positive, but not in equivalent amount as the pain when the performance is negative.',
        cite : 'Nicholas Taleb'
      }
    ];
    // const shuffledQuotes = quotes.map(a => [Math.random(), a]).sort((a,b) => a[0] - b[0]).map(a => a[1]);

    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    const quote = this.quote();

    return (
      <section className="quote section-padding">
        <div className="grid-large">
          <blockquote className="quote__quote">
            “{quote.quote}”
            <cite>{quote.cite}</cite>
          </blockquote>
        </div>
      </section>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default Quote;
