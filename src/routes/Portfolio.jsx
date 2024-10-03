import React from 'react'
import PkgArticle from '../components/Pkg_Article/PkgArticle';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {

  // Good Things
  const gt_users = [
    {
      id: "goodThings",
      title: "Good Things Are Headed Your Way",
      type: "Ecommerce Direct Marketing Package",
      objective: "This is part of a new email series that I pitched to the marketing team to help generate incremental revenue for the company.  It performs very well, bringing in approximately $1.2 Million in unplanned revenue annually. The overall idea was to thank recent orderers for their patronage by “surprising and delighting” them with an exciting savings opportunity that no other customers were getting. We currently have 5 other creatives rotating in the series.",
      inspiration: "The idea for this version: Show a modern, animated email that gives a bold statement regarding this recent order and teases a special reward incentive that's waiting for them on the landing page. It's an interactive balloon pop experience on the LP that reveals the discount.", 
      result:"",
      isValid: true, 
    },
  ];
  const gt_images = [
    {url: "../src/assets/packages/goodThings/GTEmail.png", blurb: ""},
    {url: "../src/assets/packages/goodThings/GTPkg1.png", blurb: ""},
    {url: "../src/assets/packages/goodThings/GTPkg2.png", blurb: ""},
  ];

  // MoneyTree
  const mt_users = [
    {
      id: "moneyTree",
      title: "Money Tree",
      type: "Ecommerce Direct Marketing Package",
      objective: "Create an interactive game that would surprise and delight users with both an exciting opportunity to win and a special “free gift” order incentive.",
      inspiration: "The idea for this version: Ever wish you had your own personal money tree? Yeah, me too. That's what gave me the idea here. The user gets presented with the sweepstakes section first. They click to shake the tree and cash falls down and tallies up. The prize was made variable, ranging from $50,000-$100,000. Playing off of the excitement of the sweepstakes, we haloed the theme for the product section, giving the user a chance to shake the tree for a free gift order incentive. Users received either a $25 or $30 free gift value with their order based on their buyer segment with the most loyal customers revealing the highest amount. Design-wise, we kept it light and playful. We added a little birdie who “chirped” and relayed important UI messaging to the user. We even had elements like a boot falling out of one of the trees as a fun add-on.",
      result:"This performed very well. It tested at a +18 Lift to Order Response.", 
      isValid: true, 
    },
  ];
  const mt_images = [
    {url: "../src/assets/packages/moneyTree/MoneyTree1.png", blurb: ""},
    {url: "../src/assets/packages/moneyTree/MoneyTree2.png", blurb: ""},
    {url: "../src/assets/packages/moneyTree/MoneyTree3.png", blurb: ""},
    {url: "../src/assets/packages/moneyTree/MoneyTree4.png", blurb: ""},
    {url: "../src/assets/packages/moneyTree/MoneyTree5.png", blurb: ""},
    {url: "../src/assets/packages/moneyTree/MoneyTree6.png", blurb: ""},
  ];

  // Positive Impact
  const pi_users = [
    {
      id: "positiveImpact",
      title: "Positive Impact",
      type: "Ecommerce Direct Marketing Package",
      objective: "Create a new contest promotion that is uplifting to the users and provides a substantial payout for our imminent prize event",
      inspiration: "This package was written in the thick of Covid lockdown. A lot of people around the country were feeling the financial strains of furloughs and budget cuts. But at the same time, there was a strong sense of community across the country. People were (virtually) checking in on family, friends and neighbors and offering to help anyway they could. It gave me the idea to create an Americana-themed package with a strong sweepstakes offer that would give substantial financial relief and impact the winner's life in a positive way. This “positive impact” would help wipe out debt, cushion savings, even help out loved ones. Design-wise, we chose a red, white and blue color pallet with elements from our national landmarks. We even included a virtual apple pie recipe card that users could download. (I wrote and tested the recipe myself)!",
      result:"This performed very well. It tested at a +18 Lift to Order Response.", 
      isValid: true, 
    },
  ];
  const pi_images = [
    {url: "../src/assets/packages/positiveImpact/PIEmailTop.png", blurb: ""},
    {url: "../src/assets/packages/positiveImpact/PIEmailMid.gif", blurb: ""},
    {url: "../src/assets/packages/positiveImpact/PIEmailBody.png", blurb: "The upfront message teases THREE positive impact checks with the last check remaining a mystery until the user clicks through to the landing page."},
    {url: "../src/assets/packages/positiveImpact/PIPkg1.png", blurb: "On load of the landing page, the user gets a pop-up message asking him to make a decision regarding how much the last positive impact check should be made out for if he wins from this notice. Johnny is choosing between three prize values: Cash for a Vacation, Cash for a new Car, or Cash towards a Charity."},
    {url: "../src/assets/packages/positiveImpact/PIPkg2.png", blurb: "Once Johnny picks, he is asked to confirm his choice."},
    {url: "../src/assets/packages/positiveImpact/PIPkg3.png", blurb: ""},
    {url: "../src/assets/packages/positiveImpact/PIPkg4.png", blurb: "This was placed into an affinity mailing targeted to buyers who have shown an interest in kitchen items. We added a fun virtual recipe card that Johnny could print for free."},
  ];

  // Uncut Checks
  const uc_users = [
    {
      id: "uncutChecks",
      title: "Uncut Checks",
      type: "Ecommerce Direct Marketing Package",
      objective: "Create a new daily package that can be used with the promotional TV timeframe.",
      inspiration: "Come up with a fresh approach to showcase the Win For Life prize being offered. The lifetime payments are paid out weekly, which comes out to a lot of checks being printed. That inspired the idea of freshly printed uncut money sheets. Here we switched out the cash for faux-check sheets. Design-wise, we wanted to go big and bold with a modern, clean letter.",
      result:"This package performed stellar. It was a +19 in unique clicks, + 16 in lift to order response", 
      isValid: true, 
    },
  ];
  const uc_images = [
    {url: "../src/assets/packages/uncutChecks/UCEmail.png", blurb: "The top of the email is attention-grabbing with an oversized prize statement overlapping the checks to emphasize the massive payout amount. We used minimal copy above the fold as a teaser and kept the letter informational and on the shorter side."},
    {url: "../src/assets/packages/uncutChecks/UC1.png", blurb: "Landing Page: The user clicks through the email and sees a continuation of the uncut checks theme."},
    {url: "../src/assets/packages/uncutChecks/UC2.png", blurb: "Call to order: We segmented the messaging here, targeting our lower tier of orderers, encouraging them to place a new order today to “level up” and start receiving bigger and better customer level benefits."},
    {url: "../src/assets/packages/uncutChecks/UC3.png", blurb: ""},
    {url: "../src/assets/packages/uncutChecks/UC4.png", blurb: "Supporting Assets: These assets are sprinkled throughout the lineup between products on tab 2 and 3, as a reminder to the user that their entry has not yet been submitted and they have to keep going to complete it."},
    {url: "../src/assets/packages/uncutChecks/UC5.png", blurb: "Entry Confirmation Stamp"},
  ];

  // We're Getting Close
  const wgc_users = [
    {
      id: "weGettinClose",
      title: "We're Getting Close",
      type: "Ecommerce Direct Marketing Package", 
      objective: "Create a new email package that can be used during the final 10 days to enter countdown timeframe.",
      inspiration: "This was based around my personal experience, while making a prize delivery on behalf of PCH. I recalled the electricity of anticipation as we drove down the highway, closing the miles between our hotel and the winner's location, inching in excitement with each highway sign we passed. That inspired me to create a fun package that puts Johnny in the Prize Patrol van, dreaming about his own winning moment. Will we be coming for him next? Will it be his we're closing in on in just days to award our next big prize?  We added personalization throughout including on the highway signs to help reinforce that it could very well be Johnny's home we visit next if he enters and wins. Design-wise, we wanted to keep this airy and playful to give the entrant room to dream about the route we could be taking to their home.",
      result:"This package was a very high performer. Due to its success, we created a V2 of the package.", 
      isValid: true, 
    },
  ];
  const wgc_images = [
    {url: "../src/assets/packages/wereGettingClose/wgc_Email.png", blurb: "E-Mail"},
    {url: "../src/assets/packages/wereGettingClose/wgc1.png", blurb: "Landing Page: We used a driving animation here to help set the scene of a prize delivery. It's a dream sequence that outs the user in the driver's seat. This animation autostarts on load and continues for 4 stages until a hard with the call to action for Johnny to enter is presented."},
    {url: "../src/assets/packages/wereGettingClose/wgc2.png", blurb: "We designed a custom billboard"},
    {url: "../src/assets/packages/wereGettingClose/wgc3.png", blurb: ""},
    {url: "../src/assets/packages/wereGettingClose/wgc4.png", blurb: "Balloons swaying in the breeze"},
    {url: "../src/assets/packages/wereGettingClose/wgc5.png", blurb: "We continued the driving theme for the product section. Here we created a digital sign that switched out messaging in two stages."},
    {url: "../src/assets/packages/wereGettingClose/wgc6.png", blurb: "Included targeted messaging for lapsed buyers"},
  ];

  return (
    <>
      <h1>Packages</h1>
      <PkgArticle id="goodThings" items={gt_users} images={gt_images}/>
      <PkgArticle id="moneyTree" items={mt_users} images={mt_images}/>
      <PkgArticle id="positiveImpact" items={pi_users} images={pi_images}/>
      <PkgArticle id="uncutChecks" items={uc_users} images={uc_images}/>
      <PkgArticle id="weGettinClose" items={wgc_users} images={wgc_images}/>

      <Outlet/>
    </>
  )
}

export default Portfolio