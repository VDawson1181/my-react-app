import React from 'react'
import PkgArticle from '../components/Pkg_Article/PkgArticle';

const Portfolio = () => {

  const gt_users = [
    {
      id: "goodThings",
      name: "\"Good Things Are Headed Your Way\"- Ecommerce Direct Marketing Package", 
      objective: "This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.",
      inspiration: "The idea for this version: Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.", 
      result:"",
      isValid: true, 
    },
  ];
  const gt_images = [
    {url: "./src/assets/packages/goodThings/GT_Email.png", blurb: ""},
    {url: "./src/assets/packages/goodThings/GT_Pkg_1.png", blurb: ""},
    {url: "./src/assets/packages/goodThings/GT_Pkg_2.png", blurb: ""},
  ];
  const mt_users = [
    {
      id: "Money Tree",
      name: "\"Money Tree Interactive Game\"- Ecommerce Direct Marketing Package", 
      objective: "Create an interactive game that would surprise and delight users with both an exciting opportunity to win and a special “free gift” order incentive.",
      inspiration: "The idea for this version: Ever wish you had your own personal money tree? Yeah, me too. That's what gave me the idea here. The user gets presented with the sweepstakes section first. They click to shake the tree and cash falls down and tallies up. The prize was made variable, ranging from $50,000-$100,000. Playing off of the excitement of the sweepstakes, we haloed the theme for the product section, giving the user a chance to shake the tree for a free gift order incentive. Users received either a $25 or $30 free gift value with their order based on their buyer segment with the most loyal customers revealing the highest amount. Design-wise, we kept it light and playful. We added a little birdie who “chirped” and relayed important UI messaging to the user. We even had elements like a boot falling out of one of the trees as a fun add-on.",
      result:"This performed very well. It tested at a +18 Lift to Order Response.", 
      isValid: true, 
    },
  ];
  const mt_images = [
    {url: "./src/assets/packages/moneyTree/MoneyTree1.png", blurb: ""},
    {url: "./src/assets/packages/moneyTree/MoneyTree2.png", blurb: ""},
    {url: "./src/assets/packages/moneyTree/MoneyTree3.png", blurb: ""},
    {url: "./src/assets/packages/moneyTree/MoneyTree4.png", blurb: ""},
    {url: "./src/assets/packages/moneyTree/MoneyTree5.png", blurb: ""},
    {url: "./src/assets/packages/moneyTree/MoneyTree6.png", blurb: ""},
  ];

  const pi_users = [
    {
      id: "Positive Impact",
      name: "\"Positive Impact\"- Ecommerce Direct Marketing Package", 
      objective: "Create a new contest promotion that is uplifting to the users and provides a substantial payout for our imminent prize event",
      inspiration: "Inspiration: This package was written in the thick of Covid lockdown. A lot of people around the country were feeling the financial strains of furloughs and budget cuts. But at the same time, there was a strong sense of community across the country. People were (virtually) checking in on family, friends and neighbors and offering to help anyway they could. It gave me the idea to create an Americana-themed package with a strong sweepstakes offer that would give substantial financial relief and impact the winner’s life in a positive way. This “positive impact” would help wipe out debt, cushion savings, even help out loved ones. Design-wise, we chose a red, white and blue color pallet with elements from our national landmarks. We even included a virtual apple pie recipe card that users could download. (I wrote and tested the recipe myself)!",
      result:"This performed very well. It tested at a +18 Lift to Order Response.", 
      isValid: true, 
    },
  ];
  const pi_images = [
    {url: "./src/assets/packages/positiveImpact/PI_Email_Top.png", blurb: ""},
    {url: "./src/assets/packages/positiveImpact/PI_Email_Mid.gif", blurb: ""},
    {url: "./src/assets/packages/positiveImpact/PI_Email_Body.png", blurb: "The upfront message teases THREE positive impact checks with the last check remaining a mystery until the user clicks through to the landing page."},
    {url: "./src/assets/packages/positiveImpact/PI_Pkg_1.png", blurb: "On load of the landing page, the user gets a pop-up message asking him to make a decision regarding how much the last positive impact check should be made out for if he wins from this notice. Johnny is choosing between three prize values: Cash for a Vacation, Cash for a new Car, or Cash towards a Charity."},
    {url: "./src/assets/packages/positiveImpact/PI_Pkg_2.png", blurb: "Once Johnny picks, he is asked to confirm his choice."},
    {url: "./src/assets/packages/positiveImpact/PI_Pkg_3.png", blurb: ""},
    {url: "./src/assets/packages/positiveImpact/PI_Pkg_4.png", blurb: "This was placed into an affinity mailing targeted to buyers who have shown an interest in kitchen items. We added a fun virtual recipe card that Johnny could print for free."},
  ];

  return (
    <>
      <h2>Portfolio</h2>
      <ul className="portfolioList">
        <li>Good Things</li>
        <li>Money Tree</li>
        <li>Positive Impact</li>
        <li>Uncut Checks</li>
        <li>We're Getting Close</li>
      </ul>
      <PkgArticle id="goodThings" items={gt_users} images={gt_images}/>
      <PkgArticle id="MoneyTree" items={mt_users} images={mt_images}/>
      <PkgArticle id="PositiveImpact" items={pi_users} images={pi_images}/>
    </>
  )
}

export default Portfolio