import React from 'react'
import PkgBlog from '../components/Pkg_Blog/PkgBlog';

const EMails = () => {

  // Real News Vs Fake News
  const fih_blog = [
    {
      id: "realvsfake",
      title: "Funds In Holding",      
      isValid: true, 
    },
  ];
  const fih_Post = {
      content: `
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Logo" loading="lazy"/>
                <h3>Inspiration: </h3>
                <p>I was inspired to create this “winner’s file” theme based on an internal process PCH currently has in place. This special file is prepared ahead of award by the contest department immediately after winner selection and includes the winner’s personal contact information like name and address. I felt that was a strong motivator to get the user to take action. We have missing info–the winner’s name–and if Johnny claims his entry, it could be HIS name we add with prize checks coming his way very soon. We kept the tone serious and with urgency. Design-wise, we used a lot of red elements to flag some of the more important copy.</p>
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="Email Img" loading="lazy"/>
                `}
  const fih_Markup = { __html: fih_Post.content };

  // Little Johnny Knows
  const ljk_blog = [
    {
      id: "LittleJohnny",
      title: "LITTLE JOHNNY KNOWS",      
      isValid: true, 
    },
  ];
  const ljk_Post = {
      content: `
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Logo" loading="lazy"/>
                <h3>Objective: </h3>
                <p>Create a new PCHlotto microsites email that emphasizes the benefits of playing at PCHlotto vs. the state lottery.</p>
                <h3>Inspiration: </h3>
                <p>One big benefit that my client has to their advantage is the absolutely free gameplay for all their lotto-style games. These games offer daily or weekly drawings with either a jackpot or fixed prize amount. Another terrific benefit is that you can play from home and you don’t need to be a “gamer” to get in to win. Essentially, what I wanted to get across with the creative was that playing and winning at PCHlotto is child’s play. It’s easy and quick to get your numbers, it’s completely free (as opposed to “cash fee” state lotteries), and with PCHlotto’s convenient online gameplay, it’s the new-age way of getting in to win - you don’t even need to leave your home. </p>
                <p>Our creative here was designed to demonstrate all those benefits in a light-hearted way. We illustrated a drawing of a child propping up a laptop, so he could reach the keys to get in on the fabulous prizes. Our design aesthetic was inspired by vintage baby ads and new year’s baby promotions from the 1960’s. This creative performed very well and our marketing team liked it so much, we briefly used Johnny as a mascot for the line of business. Baby Johnny eventually got phased-out when the brand redesigned.</p>
                <p><span class="lrgtxt">- This performed very well. It rolled out on judgment and came in at a <u>+27 lift to unique clicks</u></span></p>
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="Email Img" loading="lazy"/>

                `}
  const ljk_Markup = { __html: ljk_Post.content };

  // Unclaimed Funds
  const ucf_blog = [
    {
      id: "UnclaimedFunds",
      title: "Unclaimed Funds",      
      isValid: true, 
    },
  ];
  const ucf_Post = {
      content: `
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="PCH Logo" loading="lazy"/>
                <h3>Objective: </h3>
                <p>Create a new email for the automated email program using a tried and true theme.</p>
                <h3>Inspiration: </h3>
                <p>This was inspired by the unclaimed funds concept, only instead of this being about unclaimed money, the focus is on the prize entry that is at risk of going unclaimed from this notice if Johnny doesn’t act fast. As a little background, a specific “prize number” is attached to each entry and it is this number that could potentially get selected as the matching winning number on drawing day. That is why it is so critical to claim each and every prize number offered, and that is what this email has impressed on the user. The tone is urgent and serious. Design-wise, we choose a modern “banky” look incorporating ghosted elements in the background and minimizing colors, reserving a bold yellow only for special callouts in the messaging.</p>                
                <img className="blog-image" src="./src/assets/packages/goodThings/GT_Pkg_1.png" alt="Email Img" loading="lazy"/>

                `}
  const ucf_Markup = { __html: ucf_Post.content };

  return (
    <>
      <h1>Direct Marketing Emails</h1>
      {/* <div dangerouslySetInnerHTML={markup} /> */}
      <PkgBlog id="FundsInHolding" items={fih_blog} markup={fih_Markup} />
      <PkgBlog id="LittleJohnny" items={ljk_blog} markup={ljk_Markup} />
      <PkgBlog id="UnclaimedFunds" items={ucf_blog} markup={ucf_Markup} />
    </>
  )
}

export default EMails