import React from 'react'
import PkgBlog from '../components/Pkg_Blog/PkgBlog';

const Portfolio = () => {

  // Real News Vs Fake News
  const rn_blog = [
    {
      id: "realvsfake",
      title: "Can YOU Tell the Difference Between Real News and Fake News?",      
      isValid: true, 
    },
  ];
  const rn_Post = {
      content: `<p>It's the millennium. The age where self-proclaimed blogs and technology are plentiful, and social media outlets like facebook and twitter are communal feeding grounds for pop-culturalists and newsies alike. Today anyone with an opinion and a cell phone can post “news” stories online. <span class="redCpy">But who's to say what's real and what's fake news?</span> </p>
                <p>With so much content out there, we want to make sure that when it comes to Publishers Clearing House news and announcements, you can - without a doubt - tell fact from fiction.  And, what better way to jump into the murky waters of real vs. fake news, than to put your own PCH knowledge to the test!</p>
                <h2>Quiz Time: Can you tell which headlines below are REAL news and which are FAKE?</h2>
                <ul>
                <li>
                    <p>#1: No Winner, No Check?</p>
                    <img className="card-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="REAL OF FAKE: Sweeps Winner Not Home. Prize Patrol Gives Up!" loading="lazy"/>
                    <h3 class="redCpy">FAKE NEWS!</h3>
                    <p>No way this is true! The PCH Prize Patrol always finds our winner, even if that means delivering the “big check” on a plane ride to New York (yes, that really happened).</p>
                </li>
                <li>
                    <p>#2: A Call to Collect? </p>
                    <img className="card-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Winner Contacted by Phone to Collect Major Prize!" loading="lazy"/>
                    <h3 class="redCpy">FAKE NEWS!</h3>
                    <p>We'll NEVER tell a major prize winner before award day that they won - and certainly not by phone (that's a scam alert). It's just not our style. We like to surprise our winner on award day in person with a big smile and a very big check.</p>
                </li>
                <li>
                    <p>#3: Losing State?</p>
                    <img className="card-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="No PCH Winners From My State EVER!" loading="lazy"/>
                    <h3 class="redCpy">FAKE NEWS!</h3>
                    <p>No way - you can bet we've had winners from your home state! In fact, over $327 Million has been awarded to date with winners in ALL 50 STATES - including yours -- plus Canada and the Yukon, too! That's a lot of winning.</p>
                </li>
                <li>
                    <p>#4: June 30th Event?</p>
                    <img className="card-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="Local Resident 'Wins It All' in PCH's Special Early Look June 30th Prize Event!" loading="lazy"/>
                    <h3 class="greenCpy">REAL NEWS!</h3>
                    <p>Absolutely! The next big prize we're prepared to award is the multimillion-dollar “Win It All” prize - that's a $2 Million lump-sum, plus $10,000 A Month For Life, plus a New Lincoln MKZ valued at $36,095 - and we could be heading to your area. Have you entered to win today?</p>
                </li>
                </ul>

                <p>So, how did you do? I'm sure as a dedicated fan, you already knew most of those answers, BUT if you didn't and you learned one new PCH fact today, then pat yourself on the back because you just fired a flaming truth sword into the belly of the fake news beast!  It felt good, right? </p>

                <p>Great job! Now, make sure you enter to “Win It All” today before time runs out.<p>

                <p class="signature>
                    Nicole T.<br>
                    PCH Creative<br>
                    <span>P.S. We have REAL WINNERS every day! Tell us below how you would make YOUR Winning Moment exciting on June 30th!</span>
                <p>

                <p class="keywordCpy">Keywords:Real news vs. fake news, PCH, social media</p>
                <p class="metaCpy">Meta-Description:Real News vs. Fake News: Can you tell the difference? Don't get scammed by Publishers Clearing House scammers. You'll want to read this!</p>

                `}
  const rn_Markup = { __html: rn_Post.content };


  // Perfect fit
  const pf_blog = [
    {
      id: "goodThings",
      title: "A Perfect Fit: Online Jigsaw Puzzles at PCH.com Games and YOU!",      
      isValid: true, 
    },
  ];
  const pf_Post = {
      content: `
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH.com Games Jigsaw Puzzle" loading="lazy"/>
                <h1>Who doesn't love a good online jigsaw puzzle?</h1>
                <p>The fact is, with the dawn of the digital age, many adults aren't reaching far beyond their computers and smart devices for classic games (like jigsaw puzzles) that we all enjoyed as kids. And now, this beloved strategy game is online at <span class="redCpy">PCH.com Games</span>, and ready to play from your desktop, unlimited and for free.</p>
                <p>Yes, together again in a puzzle-piece-fitting frenzy, you relive the fun days of your youth with online jigsaw puzzles anytime you want.</p>
                <p>And with all the benefits that jigsaw puzzles offer, why not enjoy a game? For one, it helps build problem-solving skills, which let's face it -- we all need in our day-to-day lives.</p>
                <p>But did you know that some scientists believe that playing the kinds of strategy games like online jigsaw puzzles is good for your mental health and can even help ward off Alzheimer's, Dementia and memory loss?</p>
                <p>SO, this FUN pastime is actually a relaxing, challenging way to keep your mind fresh and energized… where do I sign up?</p>
                <p>Go to <span class="redCpy">PCH.com Games</span> - if you don't have an account, please create one (it's 100% secure and painlessly fast, I promise you!) - then, head over to the "strategy games" and give Jigsaw Puzzle a try.</p>
                <p>And while you're there, here are some helpful tips to solving the puzzle:</p>
                <ul>
                    <li><span className="lrgtxt">Start with the edges. </span> Look for the corners and work your way around. If you need a helping hand, you can go into the <span className="lrgtxt">main menu</span> at the bottom and select "show edges." This will hide all the middle pieces, so you have a better view of "the frame."</li>
                    <li><span className="lrgtxt">Separate the pieces using colors and patterns.</span> If they look similar, group them together. </li>
                    <li><span className="lrgtxt">Listen for the sound of victory!</span> That's what I love about jigsaw puzzles - there's only 1 right answer. One piece that fits. So, when you hear the pieces "click," you know you've done good! </li>
                </ul>
                <p>And, of course, a great perk about playing online -- you'll never lose another puzzle piece again! </p>
                <p>Good luck!</p>
                <p class="signature>
                    Nicole T.<br>
                    PCH Creative<br>
                    <span>P.S. Games are a great way to wind down after a long day. Or better yet, start your day off with some breakfast and a quick game. What time of the day do you like to play? Leave a comment below and let me know.</span>
                <p>

                <p class="keywordCpy">Keywords: Online Jigsaw Puzzles, PCH.com Games</p>
                <p class="metaCpy">Meta-description: Online Jigsaw Puzzle at PCH.com Games is a great way to stay refreshed and relaxed. Give it a try today.</p>

                `}
  const pf_Markup = { __html: pf_Post.content };

  // Generational Prize
  const gp_blog = [
    {
      id: "genPrize",
      title: "Passing Down A Generational Prize: How Would YOU Spend $5,000 A Week /'Forever/'",      
      isValid: true, 
    },
  ];
  const gp_Post = {
      content: `
                <p><strong>Hello friends and fans! So, you <span class="redCpy">want to win the $5,000 A Week "Forever" prize on August 31st</span> that pays out for not one, but two generations? Then, you've obviously thought about how you'd spend the winnings -- right?</strong></p>
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH.com Games Jigsaw Puzzle" loading="lazy"/>
                <p>I don't know about you, but for me, I know exactly what I would do with that cash windfall. You see, I'm currently shopping for my very first home. And as it turns out: My red, white, and blue "American Dream" of owning vs. renting could use a little more… green.</p>
                <p>Now, I'm a country girl at heart, so a home with an inviting kitchen, is all I need. There I can be left to recreate family recipes like my Great Aunt's legendary Sunday sauce or bake-up a storm of breads, and muffins and favorite pies (you know who you are, Blueberry and Key Lime). And, of course, I'd create what will eventually become the new family recipes to be passed down to future generations for years to come.</p>
                <p><strong>Let's face it: Passing down the "secret sauce" from generation to generation is important.</strong> And PCH gets that. That's why the Prize Patrol is preparing to award the multi-generational "Forever" prize on August 31st.</p>
                <p>With the "Forever" prize, not only would the winner receive $5,000 a week for life, but then, after that, a beneficiary of the winner's choosing would start receiving prize payouts for the rest of their life. Now, that's a family-size prize "serving" even the Great-grandkids could benefit from: a true recipe for financial success!</p>
                <h2>Which begs the question: If you won an incredible $5,000 A Week "Forever," how would YOU spend the cash?</h2>
                
                <p>There are so many ways to enhance your life with that kind of money. An immediate idea is to celebrate your good fortune with an unforgettable extended family vacation -- maybe visit Europe or beloved American landmarks like the Grand Canyon or Statue of Liberty? But then...</p>
                <p>You could think long term towards retirement. Maybe buy a second home in a vacation area and fly-out for the winter months (Yay! No more snow!). And looking at the big picture, you may choose to put some money aside for other family and friends to make their lives a little easier.</p>
                <p>I know here at PCH, we believe in spreading good fortune out into the world, as I'm sure you do too. And with that, we'd love to hear how you would spend the cash and spread your fortune. Please leave your comments below -- we can't wait to read each and every one!</p>                
                <p>Thanks, and Good luck!</p>
                <p class="signature>
                    Nicole T.<br>
                    PCH Creative<br>
                    <span>P.S.  Remember, with a prize that big at stake, I recommend you <span class="redCpy">visit PCH.com</span> today, tomorrow and every day before the 8/24 (11:59PM, ET) deadline to claim as many chances  to win $5,000 A Week "Forever" Good luck!</span>
                <p>

                <p class="keywordCpy">Keywords: $5,000 A Week "Forever" | How would you splurge | August 31st</p>
                <p class="metaCpy">Meta-Description: How would you splurge if you won a $5,000 A Week "Forever" prize? With a prize windfall that big, there are so many ways to enhance your life with the winnings!</p>

                `}
  const gp_Markup = { __html: gp_Post.content };
  
  // Sweeps King
  const sk_blog = [
    {
      id: "sweepsKing",
      title: "PCH is the Play From Home Sweepstakes King!",      
      isValid: true, 
    },
  ];
  const sk_Post = {
      content: `
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Wears the Crown for Easy, Fun Sweeps!" loading="lazy"/>
                <h1>A Royal Win! PCH is the Play From Home Sweepstakes King</h1>
                <p>Hear ye, hear ye! I hereby name PCH of the House Mertz the KING of <span class="redCpy">Play From Home Sweepstakes</span>, the Bringer of the “Big Checks”, the Breaker of debt Chains, Awarder of Prizes, Maker of Winners, Changer of Lives, Father of Giveaways, true and rightful Heir to the sweeps throne!</p>
                <p><span>(Phew! That's a mouthful!)</span></p>
                <p>When it comes to the exciting world of Play From Home Sweepstakes, it may feel like a lot companies are fighting for their place on the throne, but here's why Publishers Clearing House earns the iron seat:</p>
                <h2>FREE and EASY Access to Every Single One of Our Sweeps!</h2>
                
                <p>We have a strict <strong>no pay to play</strong> policy which means you can enter for all your favorite prizes (we'll go over all the fun stuff available to win further down the list) with absolutely no cost to you and as often as you want, on as many devices as you want, so you can get your play from home sweepstakes fix wherever you are.</p>
                <p><span class="redCpy">PCH.com</span> is always a great place to start! Get your daily fill in our “sweepstakes” tab - we have lots and lots of great prizes to choose from - and you can get double chances to win every single prize if you log in on both your Desktop and Mobile device.</p>
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH.com homepage!" loading="lazy"/>
                <p>But don't stop there! <strong>Download The PCH APP and go for even MORE of the sweeps that you love!</strong> AND BEST YET, JUST BY HAVING THE APP ON YOUR PHONE, YOU COULD BECOME A WINNER!! Did I mention it's free?</p>
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="Download The PCH App on your mobile device!" loading="lazy"/>                
                <h2>We Make Entering FUN!</h2>                
                <p>Gone are the days of boring, unoriginal online entry forms. The new PCH way, <span class="redCpy">reserves your daily prizes entries with a little playtime</strong> - we've got arcade and carnival games, plus casino-style fun and more! My personal favorite (I'm obsessed) is the $1,000,000 Shipwreck Stash game where you pop under-water bubbles filled with cash to boost your prize amount. But there's lots of good, clean fun and entertainment on the site, and all roads lead to entries!</p>
                <h2>Our Prizes are REAL - And So Are Our Winners!</h2>                
                
                <p>I'm sure you've seen our commercials on TV! They're filled with prize winners (real people) who enjoy Play From Home Sweepstakes, like you, and took a leap of faith. The truth is, we've awarded millions of dollars in prizes over the years to a lot of sweeps fans. That's because we're constantly looking for winners for our next big prize event (which happens every couple of months, so the search is always on!). This time, the prize we're prepared to award  is $2.6 Million plus $5,000 a week for life on December 22, 2017 when we soon take a special early look for a winner from giveaway number 8800.</p>                
                <p><strong>Plus, we have millions upon millions of dollars in other prize opportunities throughout our site - there are so many ways to win!</strong></p>                
                <p>Now, if it's instant-win excitement you're looking for, we've got you covered there, too! Try our scratch cards or special tournaments (we have tournaments every day for Slots, Blackjack and Token Games with real cash prize winners).</p>                
                <p>Remember, our House was built on delivering millionaire-making prizes and life-changing moments for families spanning from the East Coast to the West and everything in between! So, isn't it time you got in on the action? <span class="redCpy">Visit Pch.com now</span> and get in the game!</p>                
                <p class="signature>
                    Best of luck,<br/>
                    Nicole T.<br>
                    PCH Creative<br>
                    <span>P.S. SURPRISE! The Prize Patrol shows up to your door with the “Big Check”, what piece of “sweepstakes” advice would you pass along to the next person?</span>
                <p>

                <p class="keywordCpy">Keywords: Play From Home Sweepstakes </p>
                <p class="metaCpy">Meta-Description: Play From Home Sweepstakes made easy, fun and FREE from the sweeps king, Publishers Clearing House! Win cash, millionaire-making prizes and more.</p>

                `}
  const sk_Markup = { __html: sk_Post.content };

  return (
    <>
      <h1>Blogs</h1>
      {/* <div dangerouslySetInnerHTML={markup} /> */}
      <PkgBlog id="realVsFake" items={rn_blog} markup={rn_Markup} />
      <PkgBlog id="perfectFit" items={pf_blog} markup={pf_Markup} />
      <PkgBlog id="genPrize" items={gp_blog} markup={gp_Markup} />
      <PkgBlog id="sweepsKing" items={sk_blog} markup={sk_Markup} />
    </>
  )
}

export default Portfolio