import React from 'react'
import PkgBlog from '../components/Pkg_Blog/PkgBlog';

const Portfolio = () => {

  // Real News Vs Fake News
  const rn_blog = [
    {
      id: "realvsfake",
      title: "PCH: Can YOU Tell the Difference Between Real News and Fake News?",      
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
                    <img className="card-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="REAL OF FAKE: Sweeps Winner Not Home. Prize Patrol Gives Up!" loading="lazy"/>
                    <h3 class="redCpy">FAKE NEWS!</h3>
                    <p>No way this is true! The PCH Prize Patrol always finds our winner, even if that means delivering the “big check” on a plane ride to New York (yes, that really happened).</p>
                </li>
                <li>
                    <p>#2: A Call to Collect? </p>
                    <img className="card-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Winner Contacted by Phone to Collect Major Prize!" loading="lazy"/>
                    <h3 class="redCpy">FAKE NEWS!</h3>
                    <p>We'll NEVER tell a major prize winner before award day that they won - and certainly not by phone (that's a scam alert). It's just not our style. We like to surprise our winner on award day in person with a big smile and a very big check.</p>
                </li>
                <li>
                    <p>#3: Losing State?</p>
                    <img className="card-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="No PCH Winners From My State EVER!" loading="lazy"/>
                    <h3 class="redCpy">FAKE NEWS!</h3>
                    <p>No way - you can bet we've had winners from your home state! In fact, over $327 Million has been awarded to date with winners in ALL 50 STATES - including yours -- plus Canada and the Yukon, too! That's a lot of winning.</p>
                </li>
                <li>
                    <p>#4: June 30th Event?</p>
                    <img className="card-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="Local Resident 'Wins It All' in PCH's Special Early Look June 30th Prize Event!" loading="lazy"/>
                    <h3 class="greenCpy">REAL NEWS!</h3>
                    <p>Absolutely! The next big prize we're prepared to award is the multimillion-dollar “Win It All” prize - that's a $2 Million lump-sum, plus $10,000 A Month For Life, plus a New Lincoln MKZ valued at $36,095 - and we could be heading to your area. Have you entered to win today?</p>
                </li>
                </ul>

                <p>So, how did you do? I'm sure as a dedicated fan, you already knew most of those answers, BUT if you didn't and you learned one new PCH fact today, then pat yourself on the back because you just fired a flaming truth sword into the belly of the fake news beast!  It felt good, right? </p>

                <p>Great job! Now, make sure you enter to “Win It All” today before time runs out.<p>

                <p class="signature">
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
      title: "PCH: A Perfect Fit: Online Jigsaw Puzzles at PCH.com Games and YOU!",      
      isValid: true, 
    },
  ];
  const pf_Post = {
      content: `
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH.com Games Jigsaw Puzzle" loading="lazy"/>
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
                <p class="signature">
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
      title: "PCH: Passing Down A Generational Prize: How Would YOU Spend $5,000 A Week \"Forever\" ",      
      isValid: true, 
    },
  ];
  const gp_Post = {
      content: `
                <p><strong>Hello friends and fans! So, you <span class="redCpy">want to win the $5,000 A Week "Forever" prize on August 31st</span> that pays out for not one, but two generations? Then, you've obviously thought about how you'd spend the winnings -- right?</strong></p>
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH.com Games Jigsaw Puzzle" loading="lazy"/>
                <p>I don't know about you, but for me, I know exactly what I would do with that cash windfall. You see, I'm currently shopping for my very first home. And as it turns out: My red, white, and blue "American Dream" of owning vs. renting could use a little more… green.</p>
                <p>Now, I'm a country girl at heart, so a home with an inviting kitchen, is all I need. There I can be left to recreate family recipes like my Great Aunt's legendary Sunday sauce or bake-up a storm of breads, and muffins and favorite pies (you know who you are, Blueberry and Key Lime). And, of course, I'd create what will eventually become the new family recipes to be passed down to future generations for years to come.</p>
                <p><strong>Let's face it: Passing down the "secret sauce" from generation to generation is important.</strong> And PCH gets that. That's why the Prize Patrol is preparing to award the multi-generational "Forever" prize on August 31st.</p>
                <p>With the "Forever" prize, not only would the winner receive $5,000 a week for life, but then, after that, a beneficiary of the winner's choosing would start receiving prize payouts for the rest of their life. Now, that's a family-size prize "serving" even the Great-grandkids could benefit from: a true recipe for financial success!</p>
                <h2>Which begs the question: If you won an incredible $5,000 A Week "Forever," how would YOU spend the cash?</h2>
                
                <p>There are so many ways to enhance your life with that kind of money. An immediate idea is to celebrate your good fortune with an unforgettable extended family vacation -- maybe visit Europe or beloved American landmarks like the Grand Canyon or Statue of Liberty? But then...</p>
                <p>You could think long term towards retirement. Maybe buy a second home in a vacation area and fly-out for the winter months (Yay! No more snow!). And looking at the big picture, you may choose to put some money aside for other family and friends to make their lives a little easier.</p>
                <p>I know here at PCH, we believe in spreading good fortune out into the world, as I'm sure you do too. And with that, we'd love to hear how you would spend the cash and spread your fortune. Please leave your comments below -- we can't wait to read each and every one!</p>                
                <p>Thanks, and Good luck!</p>
                <p class="signature">
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
      title: "PCH: PCH is the Play From Home Sweepstakes King!",      
      isValid: true, 
    },
  ];
  const sk_Post = {
      content: `
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Wears the Crown for Easy, Fun Sweeps!" loading="lazy"/>
                <h1>A Royal Win! PCH is the Play From Home Sweepstakes King</h1>
                <p>Hear ye, hear ye! I hereby name PCH of the House Mertz the KING of <span class="redCpy">Play From Home Sweepstakes</span>, the Bringer of the “Big Checks”, the Breaker of debt Chains, Awarder of Prizes, Maker of Winners, Changer of Lives, Father of Giveaways, true and rightful Heir to the sweeps throne!</p>
                <p><span>(Phew! That's a mouthful!)</span></p>
                <p>When it comes to the exciting world of Play From Home Sweepstakes, it may feel like a lot companies are fighting for their place on the throne, but here's why Publishers Clearing House earns the iron seat:</p>
                <h2>FREE and EASY Access to Every Single One of Our Sweeps!</h2>
                
                <p>We have a strict <strong>no pay to play</strong> policy which means you can enter for all your favorite prizes (we'll go over all the fun stuff available to win further down the list) with absolutely no cost to you and as often as you want, on as many devices as you want, so you can get your play from home sweepstakes fix wherever you are.</p>
                <p><span class="redCpy">PCH.com</span> is always a great place to start! Get your daily fill in our “sweepstakes” tab - we have lots and lots of great prizes to choose from - and you can get double chances to win every single prize if you log in on both your Desktop and Mobile device.</p>
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH.com homepage!" loading="lazy"/>
                <p>But don't stop there! <strong>Download The PCH APP and go for even MORE of the sweeps that you love!</strong> AND BEST YET, JUST BY HAVING THE APP ON YOUR PHONE, YOU COULD BECOME A WINNER!! Did I mention it's free?</p>
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="Download The PCH App on your mobile device!" loading="lazy"/>                
                <h2>We Make Entering FUN!</h2>                
                <p>Gone are the days of boring, unoriginal online entry forms. The new PCH way, <span class="redCpy">reserves your daily prizes entries with a little playtime</strong> - we've got arcade and carnival games, plus casino-style fun and more! My personal favorite (I'm obsessed) is the $1,000,000 Shipwreck Stash game where you pop under-water bubbles filled with cash to boost your prize amount. But there's lots of good, clean fun and entertainment on the site, and all roads lead to entries!</p>
                <h2>Our Prizes are REAL - And So Are Our Winners!</h2>                
                
                <p>I'm sure you've seen our commercials on TV! They're filled with prize winners (real people) who enjoy Play From Home Sweepstakes, like you, and took a leap of faith. The truth is, we've awarded millions of dollars in prizes over the years to a lot of sweeps fans. That's because we're constantly looking for winners for our next big prize event (which happens every couple of months, so the search is always on!). This time, the prize we're prepared to award  is $2.6 Million plus $5,000 a week for life on December 22, 2017 when we soon take a special early look for a winner from giveaway number 8800.</p>                
                <p><strong>Plus, we have millions upon millions of dollars in other prize opportunities throughout our site - there are so many ways to win!</strong></p>                
                <p>Now, if it's instant-win excitement you're looking for, we've got you covered there, too! Try our scratch cards or special tournaments (we have tournaments every day for Slots, Blackjack and Token Games with real cash prize winners).</p>                
                <p>Remember, our House was built on delivering millionaire-making prizes and life-changing moments for families spanning from the East Coast to the West and everything in between! So, isn't it time you got in on the action? <span class="redCpy">Visit Pch.com now</span> and get in the game!</p>                
                <p class="signature">
                    Best of luck,<br/>
                    Nicole T.<br>
                    PCH Creative<br>
                    <span>P.S. SURPRISE! The Prize Patrol shows up to your door with the “Big Check”, what piece of “sweepstakes” advice would you pass along to the next person?</span>
                <p>

                <p class="keywordCpy">Keywords: Play From Home Sweepstakes </p>
                <p class="metaCpy">Meta-Description: Play From Home Sweepstakes made easy, fun and FREE from the sweeps king, Publishers Clearing House! Win cash, millionaire-making prizes and more.</p>

                `}
  const sk_Markup = { __html: sk_Post.content };
  
  // Total Body Laser Skincare
  const ls_blog = [
    {
      id: "TB_1",
      title: "Total Body: Top 10 Perfect Body Laser Skincare Products We're Obsessing Over (And Why You Should Be, Too!)",      
      isValid: true, 
    },
  ];
  const ls_Post = {
      content: `
                <h3>Know what the secret to youthful beauty is? Your skincare routine. Are you using the best skincare products to target your problem areas?</h3>
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="Introducing Perfect Body Laser's New Skincare Line" loading="lazy"/>
                <p><span class="redCpy">Perfect Body Laser has a whole new skincare line</span> - and we can't wait to share our personal favorites that will have you looking and feeling radiant!</p>
                <p>We've found the best skincare “miracle” solutions for every skin type and every problem area. From firming creams to overnight serums to blemish diminishers, we've put together our top ten <span class="redCpy">must-have skincare products</span> that we “heart” the most for you - and we're sure you're going to love them too (and the incredible, <span class="redCpy">youthful-looking Perfect Body results)</span>.</p>
                <ol>
                    <li><span class="lrgtxt">Perfect Everyday Base - Vitamin C, B, E and Ferulic Acid Booster </span> - Prepare for a surge of deep hydration in a lightweight formula. This super-moisture antioxidant serum defends against free-radicals that cause skin damage and premature-aging. The light serum helps it absorb into the skin faster than cream. It even helps your skin appear brighter and more youthful. This booster works perfect as a base layer for under makeup or just on its own for a natural, radiant glow.</li>
                    <li><span class="lrgtxt">Perfect Exfoliator - Bright-N-Clear Peeling Pads</span> - Set your skin back to its original state, refreshed and youthful and ready to super-absorb nourishments from your daily skincare products. Yes, this smart combination of alpha and beta hydroxy acids helps brighten and boost your skin's natural radiance by banishing dead skin cells and smoothing out fine lines. It also helps minimize the appearance of pores and even brings balance to blemishes and dark spots. By unclogging your pores and washing away dead cells that leave your skin looking dry and congested, your skincare products will be able to penetrate the skin more deeply and you'll see better results.</li>
                    <li><span class="lrgtxt">Perfect for Fine Lines and Wrinkles</span> - Instant Miracle Wrinkle Correction Serum - The fountain of youth comes in a bottle - and it's at Perfect Body Laser! This miracle formula is a breakthrough blend of age-defying messenger peptides that specifically targets line-formation pathways in the skin to help tighten and firm the skin's appearance. It also helps safeguard against environmental stress that causes fine lines and blemishes, leaving the skin looking smoother, healthier and more vibrant.</li>
                    <li><span class="lrgtxt">Perfect for Dry, Sensitive Skin</span> - All-In-One Miracle Cream - The winter months can be brutal on your skin. Between the super dry air in your home to the intense coldness of the outdoors, your skin could use some extra protection to lock in moisture and retain your smooth, healthy skin - and this ultra-nourishing miracle cream does the job beautifully!  Its intensive moisture-rich formula specially targets dry, flaky and irritated skin by attracting water particles to the skin to lock in moisture for an instant hydration boost. Leaves skin looking smooth and replenished and oh so nourished!</li>
                    <li><span class="lrgtxt">Perfect for Under eyes</span> - Professional Beautif-Eye - The skin around your eyes is the thinnest and most sensitive area on your face and as such, demands the most attention. This professional-grade solution is the perfect agent to help fight under-eye puffiness and fine lines that can make you look aged and tired. This age-defying serum helps lifts the upper eyelid and diminish crow's feet, wrinkles and “expression” lines for a more youthful look. Its collagen and elastin-boosting ingredients helps restore your skin's natural radiance and even diminishes under-eye puffiness, sagging and dark circles.</li>
                    <li><span class="lrgtxt">Perfect for Smoothing Your Neck</span> - Perfect Neck-Firming Cream - The only turkey neck I want to see in the morning is on Thanksgiving! Most people neglect the neck in their daily skincare routine, but it's the delicate skin around our neck where we usually see the first signs of aging - and here's this perfect firming solution to help visibly lift and restore natural firmness. What makes this product so incredible is the moisture-rich formula that helps resist the effects of gravity and crepey-looking skin that naturally occurs as we age. The wrinkle-fighting, collagen-boosting peptides promote elasticity and tightens the skin's appearance, giving you a more youthful look.</li>
                    <li><span class="lrgtxt">Perfect for Stretch Marks</span> - Stretch Mark Miracle Cream - Sometimes, life leaves its mark. But all it takes to remove it is a little “magic” miracle cream. Yes, this topical solution helps diminish the look of embarrassing stretch marks and smooths your skin. How? Potent peptides, fruit extracts and rich moisturizers penetrate deep into the skin to help fade existing stretch mark scars, while proactively blocking the formation of new marks. As an added bonus, it also helps boost your skin's natural elasticity and even reduces the appearance of cellulite - that's a win-win.</li>
                    <li><span class="lrgtxt">Perfect Night cream</span> - Perfect Recovery and Blemish Defense Night Oil - Ever wonder if Sleeping Beauty had a secret to her beauty? Rest and hydration can do wonders for your skin - and this set-it-and-forget-it nighttime defense oil is like the prince restoring new life and youthfulness to your skin, while you sleep. What makes this a must-have? It plumps, smooths and firms your skin's look using powerful antioxidants and a next generation retinoid, which leaves your skin with beautiful clarity, firmness and elasticity. It also boosts hydration, supports turnover of dead skin, and minimizes the look of fine lines all in one. And, as a serum, your skin will absorb it effortlessly while you rest.</li>
                    <li><span class="lrgtxt">Perfect Gentle Skin Cleanser and Makeup Remover</span> - Nourishing Milk Cleanser - If you have sensitive skin like me, you want to avoid irritation at all costs. That includes using multiple products to wash the day away, which can disrupt the balance of natural oils on the skin and lead to dry patches or blotches. This gentle nourishing solution doubles as a cleanser and makeup remover specially formulated to wash away grim without stripping the skin of natural oils. It effortlessly dissolves makeup and impurities, while leaving your skin hydrated and soft with no irritation or tightness. Perfect to use after laser resurfacing or chemical peels or even in the winter months, when our skin tends to be dry.</li>
                    <li><span class="lrgtxt">Perfect for Overall firmness</span> - Professional Collagen Restoration Serum - Fine lines, skin dehydration, premature aging, loss of “plumpness” - this rapid-absorption restoration serum works fast and does it all! This serum is AMAZING at restoring your skin's basic structure and covers not just one, but the entire spectrum of collagen care! Its impressive skin smoothing benefits plumps and firms, as the serum absorbs a range of peptides that collectively boosts collagen types III (aka the “youth collagen”), IV, VII and XVI to rejuvenate the skin and regenerate a youthful elasticity.</li>
                </ol>
                <p class="signature">
                    Here's to looking and feeling great in 2021!,<br/>
                    Nicole T.<br>
                    Creative services<br> 
                    Perfect Body Laser & Aesthetics                   
                </p>
                `}
  const ls_Markup = { __html: ls_Post.content };
  
  // Total Body EMsculpt
  const em_blog = [
    {
      id: "TB_2",
      title: "Total Body: The 7 Benefits of the NEW Emsculpt (And Why It's A Godsend For Athletes!)",      
      isValid: true, 
    },
  ];
  const em_Post = {
      content: `
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="Perfect Body Logo" loading="lazy"/>
                <p>Emsculpt not only works, it's the BEST in its class at Body Contouring and Fat Reduction!</p>
                <p>When it comes to weight loss guarantees, the words “quick fix” used to mean too good to be true. Now, it means <u>Emsculpt</u>.</p>
                <p>YES — this impressive fat blasting “miracle” machine, the hottest new trend in reducing body fat quickly (and almost too easily), really does all that it claims! But its more than just a weight loss solution, it's a godsend for athletes.</p>
                <p>Emsculpt is the first machine of its kind to simultaneously melt away fat AND tone your core, thighs, buttocks, arms, you name it, offering <u>muscle-building and body shaping</u> benefits for both the casual trainer and professional athlete alike. Plus, it has amazing healing properties for muscle recovery as well.</p>
                <p>So, what are the 7 benefits of Emsculpt?</p>
                <ol>
                    <li><span class="lrgtxt">Super Effective.</span> You'll get better results than your most challenging gym workout. Just imagine trying to fit in 20,000 squats or sit-ups in one training session - it's impossible! Yet, Emsculpt yields those results in every session, forcing your muscles to recondition and adapt to a harder workout, making weak muscle areas firmer and stronger.</li>
                    <li><span class="lrgtxt">Boosts the metabolism.</span> As you know, the higher your metabolism, the more calories you burn and the faster you lose weight. Some Emsculpt patients have experienced as much as a five-times increase in fat metabolism (apoptotic index increased from 19% to 92% post-treatment.) That will definitely jump start your weight loss.</li>
                    <li><span class="lrgtxt">Fast Results.</span> You can expect to see defined toning after the very first treatment session. Treatments generally include four sessions during a 2 - 3 week period with deeper results after each visit. And the results last! You'll continue to see an improvement for up to six months after the last session.</li>
                    <li><span class="lrgtxt">Aids In Muscle Recovery.</span> For Athletes, this is an invaluable benefit! <u>Emsculpt helps rebuild and strengthen the muscle</u> after an injury in record time, which will not only get you back on your feet faster, it will improve your strength so can train faster and more efficiently.</li>
                    <li><span class="lrgtxt">100% Non-invasive.</span> The Emsculpt machine targets muscle only, so there is absolutely no cutting and no effect to the skin. In fact, it has become one of the most popular alternatives to surgeries like <u>liposuction, tummy tucks and butt implants</u> because it offers the same outcome with no risk. And best all, no anesthesia is needed (local or otherwise because it's totally painless).</li>
                    <li><span class="lrgtxt">No Downtime.</span> Again, unlike surgery, Emsculpt requires not cutting, so there is no pre-treatment prep or post-treatment recovery time needed. You can carry on with your normal activities immediately after with minimal discomfort. Some do experience muscle soreness similar to an intense workout in the days following a treatment session, but that's nothing a little stretching can't solve.</li>
                    <li><span class="lrgtxt">Conveniently Short Sessions.</span> Each treatment session takes just 30 minutes - that's less time spent in at grocery store for your weekly shopping! It's so convenient, you can pop in on your lunch break or in between errands.</li>
                </ol>
                <p>Celebrities all around the globe are using Emsculpt to help with their training and weight loss goals and you can too right here on Long Island. Give Perfect Body Laser a call to schedule a FREE CONSULTATION and learn more about this incredible body contouring and fat reduction treatment. Mention code Emsculpt7 for a special surprise!</p>
                
                <p class="signature">
                    Nicole T.<br>
                    Creative services<br>                    
                    Perfect Body Laser & Aesthetics
                </p>
                `}
  const em_Markup = { __html: em_Post.content };
  
  // Total Body Laser Hair Removal
  const lhr_blog = [
    {
      id: "TB_3",
      title: "Total Body: Can I Get Laser Hair Removal On My Whole Body?",      
      isValid: true, 
    },
  ];
  const lhr_Post = {
      content: `
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="Perfect Body Logo" loading="lazy"/>
                <p>Why more and more men and women are turning to laser treatments to remove hair from their legs, face, arms, shoulders, back, bullocks and bikini area.</p>
                <p>I cannot tell you how often we hear, <span class="lrgtxt">/"Can I get laser hair removal on my whole body?/"</span> or “Does laser hair removal work on men?” In short, the answer to both is YES!</p>
                <p>Laser hair removal is a safe, permanent full-body smooth skin solution that has proven, outstanding effectiveness for long-lasting hair removal on all parts of the body: arms, legs, face, bikini area, buttocks, back, shoulders, even around the neck, ears and eyebrows, you can eliminate hair on every part of the body, easily and pain-free.</p>
                <p>And it's not just for women. As technology has continued to advance and evolve, more and more men are coming in to remove unwanted body hair for easier maintenance and grooming - and it's not hard to see why.</p>
                <p>Most people are affected by problematic hair growth somewhere on their body. We often reach for quick fixes like shaving or waxing, but these offer only temporary relief with regular maintenance needed.</p>
                <p>Perfect Body Laser hair removal treatment has permanent results with long-lasting benefits that far and beyond out-weigh the alternatives. In fact, we are so sure of our results, we offer an exclusive 10-year written laser hair removal guarantee - you won't find this anywhere else in New York! If you've been waxing and shaving your problem areas, here's why it's worth the switch to last hair removal:</p>
                <ol>
                    <li><span class="lrgtxt">No More Ingrown hairs</span> - Shavers, you know this all too well. This is when your hair grows back underneath the skin causing raised, red, itchy bumps. It's extremely embarrassing, not to mention uncomfortable. Ingrown hairs are more common with coarser or curly hair. For women it can be found mostly in the bikini line, but men's hair tends to be thicker all around, especially on the face and neck which can make day to day grooming unbearably irritating and painful for men. <span class="lrgtxt">Perfect Body Laser hair removal treatments</span> is the perfect solution for ingrown hairs because it targets the follicle under the skin, killing it at its root and eliminating re-growth.</li>
                    <li><span class="lrgtxt">Improve Athletic Performance</span> - Cyclists, swimmers, and runners alike all talk about the benefits that smooth skin have on their game. But it's not just professional athletes that are opting for laser hair removal. A lot of casual trainers and “weekend warriors” are <span class="lrgtxt">eliminating body hair on their arms, chest, and legs</span> to avoid chafing and rashes.</li>
                    <li><span class="lrgtxt">Cut Out The Barber</span> - The days of hiding a balding head under a toupee are over. Hollywood has shown us (in just about every action movie in the last decade) just how strong, sexy and fashionable a shaved head can be on a man, and men are embracing the trend. But as the cost and time of weekly visits to the barber to maintain this sleek, clean-shaven “manly” look starts to add up, more and more men are turning to <span class="lrgtxt">permanent laser hair removal for their scalp</span> and never looking back!</li>
                    <li><span class="lrgtxt">Less Time On The Table</span> - Ladies, who wants to spend your Saturday on the waxing table getting your monthly “ritual of torture” as the beautician pulls, rips and yanks hair on every surface of your body? Not me! And the worst part is the astronomical bill they hand you (with a smile!) at the end; is this not insult to injury? Now, imagine not only shorter sessions with less frequency, but painless sessions with no tears. And best of all, when treatment is complete, you'll have <span class="lrgtxt">long-lasting smooth legs and underarms, a beach-ready bikini line,</span> shapely eyebrows, and no more unwanted facial hair.</li>
                    <li><span class="lrgtxt">Thin Out Thicker Patches</span> - Maybe you don't necessarily want to remove all your hair. You just want to “clean up” some areas and make others more manageable and presentable. Men especially come in for a mixed treatment, not just to eliminate hair on their backs and necks, but also thin out denser patches on their chest, arm and groin area. Each <span class="lrgtxt">Perfect Body Laser hair removal treatment is 100% customizable to fit your own personal needs,</span> so you can get the perfect results to match your lifestyle or preference.</li>
                    <li><span class="lrgtxt">Saves Time And Money</span> - Do the math: Daily shaving products, monthly waxing treatments, eyebrow threading sessions, you may not realize how much you're shelling out month after month to maintain your current hair removal regimen, but when you count up the cost of razors, shaving gel, salon waxing treatments along with gratuity for the beautician annually, it's adding up big time! It's estimated that women spend anywhere between $10,000.00 (if you shave) to $23,000.00 (if you wax) on hair removal in their lifetime. <span class="lrgtxt">Now, imagine cutting that total cost to just a fraction of that with laser hair removal</span> (fyi, that comes out to a lifetime savings of $20,000.00 if you wax!); and, as a bonus, using that savings to treat yourself to some much-needed rest & relaxation, a spa vacation perhaps??</li>
                    <li><span class="lrgtxt">Hair Growth Is Gone For Good</span> - Last, but not least, <span class="lrgtxt">never will you ever need to worry about your problematic hair growth</span> coming back. Once the root of the hair follicle is lasered, it is killed off and gone for good. Although it's natural that as we age newer follicles may develop in the surrounding area, but easy annual maintenance treatments will catch and eliminate any new sprouts, if needed, to keep your skin smooth and hair-free for life.</li>
                </ol>

                <p>You deserve to look and feel as extraordinary and amazing as you are. So, don't suffer through painful waxing sessions or daily shaving routines that leave your skin bumpy and irritated. Call to schedule your free laser hair removal consultation today at Perfect Body Laser. Mention code Laser2020 for a special gift offer reserved only for our readers.</p>
                
                <p class="signature">
                    Nicole T.<br>
                    Creative services<br>   
                    Perfect Body Laser & Aesthetics<br><br>
                    <span>P.S. Perfect Body Laser is extremely committed to keeping our friends, family and staff safe during this unprecedented time. We are going above and beyond the CDC's mandatory guidelines for Covid-19 care, so you can rest assured that your visit will be safe and all machines and surfaces are vigorously sterilized.</span>             
                </p>
                `}
  const lhr_Markup = { __html: lhr_Post.content };
  
  // Total Body Diet
  const diet_blog = [
    {
      id: "TB_4",
      title: "Total Body: Is Your Diet Making Your Cellulite Worse?",      
      isValid: true, 
    },
  ];
  const diet_Post = {
      content: `
                <img className="blog-image" src="../src/assets/packages/goodThings/GT_Pkg_1.png" alt="Perfect Body Logo" loading="lazy"/>
                <p>Here are the foods that cause cellulite and the best laser treatments to remove cellulite build-up for good!</p>
                <p>What you're eating everyday matters. Yes, it's true that genetics play an important role in the development of cellulite - but did you know the build-up of toxins in your body, along with poor blood circulation, hormones and your skin's natural elasticity, <span class="lrgtxt">can actually make the appearance of cellulite worse?</span> And, it's the food we take in every day that has a big impact on our body's reaction to ALL of these things.</p>
                <p>So, instead of replaying the “healthy eating advice” we've all heard for years (lots of fruits and vegetables, only lean protein, no junk food or unhealthy snacking, blah blah blah), here are some foods that can make cellulite worse, and other foods that help minimize cellulite.</p>
                <p>First, let me say, there is no “easy” way to get rid of cellulite- unless you opt for <span class="lrgtxt">proven and effective cellulite removal laser treatments like Coolsculpting or VelaShape</span> (we'll get to that in a bit), but with some small adjustments to your daily diet using these “miracle” foods, you can help lessen those bumpy fat deposits with minimal effort.</p>
                <p>These are the foods that make cellulite worse (avoid these at all cost!):</p>
                <p>Sugar, alcohol, cheese, processed foods like canned soups and cold-cuts, margarine, sausages, high sodium salt-bombs like soy sauce and pretzels, unhealthy fats found in fried foods and even some pizza!</p>
                <p>These foods minimize cellulite (add these to your diet!)</p>
                <ul>                    
                    <li><span class="lrgtxt">Green tea:</span> It speeds up the metabolism, stimulating the release of stored fat, thanks to its key ingredients, theobromine and caffeine. Suggested serving: 3 - 4 cups a day.</li>
                    <li><span class="lrgtxt">Whole grains:</span> We know that whole-grain cereal, brown rice and pasta all keep you from snacking because they make you feel full, but they also contain healthy antioxidants, too. Just one serving a day keeps the cellulite away!</li>
                    <li><span class="lrgtxt">Broccoli:</span> Just about all vegetables are good for you because of the vitamins and minerals they contain. But broccoli also contains a substance known as alpha lipoic which is best for cellulite because it stops the body's collagen from hardening into cellulite. Suggested serving: 3 - 4 times a week.</li>
                    <li><span class="lrgtxt">Oranges:</span> Of course, they're rich in Vitamin C, but they also have lots of the methoxylated bioflavonoids which improve circulation (which as we mentioned is really important) and help to correct cell issues that could potentially create cellulite.</li>
                    <li><span class="lrgtxt">Water:</span> Detoxing your body is crucial when trying to lose stubborn fat like cellulite; leg or butt fat stores can benefit from eight glasses of water a day.</li>
                    <li><span class="lrgtxt">Nettles:</span> What is it, exactly? It's a powerful herbal detoxifier (you can add it to your tea or get it in capsule form) with diuretic properties that flush cellulite-triggered toxins from the body. It also has anti-inflammatory benefits proven to calm the skin conditions like acne or eczema.</li>
                    <li><span class="lrgtxt">Fatty Fish:</span> Fatty acids found in oily fish like salmon, herring, albacore tuna, lake trout, mackerel and sardines helps metabolize your body's fat, including the fatty builds-up of cellulite. Suggested serving: Twice a week.</li>
                </ul>

                <p>Other helpful foods include turmeric, cayenne pepper, beetroot, egg yolk (boiled or poached, not fried), Dandelion, apples, bananas, tomatoes, grapefruit, cabbage and nuts high in omega-3 fatty acids like walnuts and almonds. Also, try adding lemon, cucumber or apple cider vinegar to your water for an added toxic-flushing diuretic benefits.</p>
                <p>Give these healthy food tips a try and see how your cellulite diminishes. And, when you're ready to finally get rid of your cellulite for good, Perfect Body Laser of Bayshore, Long Island is here to help! We have <span class="lrgtxt">the best 2020 cellulite laser removal treatments</span> like Coolsculpting, which freezes and kills-off fat cells, and Velashape that heats and melts away fat, both non-invasive and fully approved by the FDA. Come in for your FREE Consultation today and mention the code CELLULITE2020 for a special free gift!</p>            

                <p class="signature">
                    Nicole T.<br>
                    Creative services<br>   
                    Perfect Body Laser & Aesthetics<br><br>
                    <span>P.S. Perfect Body Laser is extremely committed to keeping our friends, family and staff safe during this unprecedented time. We are going above and beyond the CDC's mandatory guidelines for Covid-19 care, so you can rest assured that your visit will be safe and all machines and surfaces are vigorously sterilized.</span>             
                </p>
                `}
  const diet_Markup = { __html: diet_Post.content };

  return (
    <>
      <h1>Blogs</h1>
      {/* <div dangerouslySetInnerHTML={markup} /> */}
      <PkgBlog id="realVsFake" items={rn_blog} markup={rn_Markup} />
      <PkgBlog id="perfectFit" items={pf_blog} markup={pf_Markup} />
      <PkgBlog id="genPrize" items={gp_blog} markup={gp_Markup} />
      <PkgBlog id="sweepsKing" items={sk_blog} markup={sk_Markup} />
      <PkgBlog id="tb_laser" items={ls_blog} markup={ls_Markup} />
      <PkgBlog id="tb_emsculpt" items={em_blog} markup={em_Markup} />
      <PkgBlog id="tb_hairRemoval" items={lhr_blog} markup={lhr_Markup} />
      <PkgBlog id="tb_diet" items={diet_blog} markup={diet_Markup} />
    </>
  )
}

export default Portfolio