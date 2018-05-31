## Data Reflects the Heart of its Wielder  
##### by Brandon Oden  
_5/31/2018_

This app exists to help. Its (anonymous) data exists to help _it_ help _better_.

When users receive a word, their feelings for the word may compel them to "like" or "dislike" the word.
Each word stored in the database contains properties, including but not limited to
the number of times it is used, "liked", "disliked", or "shared".  

In addition to this global data, other data may be produced by each user session (anonymously).
While some properties may seem to be useless, extraneous, redundant, or mere novelty at first,
their data could turn out to be the puzzle piece needed for major developments as the data evolves.  
<figure align="center">
<img width="75%" height="auto" src="https://res.cloudinary.com/bnoden/image/upload/v1527679968/tf_mdx7ou.png">
</figure>

##### Data may be analyzed at some point to:  
- Determine which affirmations are particularly effective or ineffective (see [Word Ratings](#wordRatings) further down)
- Discover behavioral trends among users (how many words before they exited/went idle? did they like/dislike/share?)
- Discover possible factors and relationships between factors correlating to one's need or desire for affirmation
- Find ways to personalize the experience (while respecting user privacy)
- Basically, get relevant, useful feedback, seamlessly, without soliciting users to provide feedback explicitly (while providing the option to do so)

- Iteratively generate effective affirmation sequences over time, algorithmically.
  - In other words: Machine Learning
    - Imagine an ideal outcome, such as a set of affirmations in some particular order, which results in the best possible feedback.
    - Develop a model of this outcome, an abstract, algorithmic representation.
    - Create self-refactoring components that continuously respond and adapt, to new data, as it relates to that model.  

<span id='wordRatings'></span>  

### Word Ratings  
##### Possible ways to determine word rating (so far)
  1. `rating = (used/2 + liked) / (used/2 + disliked)`
  2. `rating = (used + liked - disliked) / used`

Results can be tested in console or [repl](https://repl.it/@bnoden/CompareRates) with:
```javascript
const a = (use, like, dislike) =>
  ((use / 2 + like) / (use / 2 + dislike)).toFixed(2);
const b = (use, like, dislike) => ((use + like - dislike) / use).toFixed(2);

function compare(use, like, dislike, rating = fn => fn(...arguments)) {
  console.log(`compare(${[...arguments]}) \t// ${rating(a)} ${rating(b)}`);
}
```
##### Try it out at [https://repl.it/@bnoden/CompareRates](https://repl.it/@bnoden/CompareRates)  
A few examples:  
```javascript
						//    a	   b
compare(100,12,8) 		// 1.07 1.04
compare(45,3,1) 		// 1.09 1.04
compare(287,13,46) 		// 0.83 0.89
compare(12468,43,187) 	// 0.98 0.99
compare(100,36,2) 		// 1.65 1.34
```

##### What to do with word ratings?
**Possibilities:**
- Experiment with the RNG. Make words more or less likely to be called, based on ratings.  
  - ...while keeping in mind that _what word_ isn't as important as _what is it about that word_.
- Learn what makes a word more liked  
  - Find relationships between good words  
  - Fine-tune the word list
 - Countless applications yet to be discovered
