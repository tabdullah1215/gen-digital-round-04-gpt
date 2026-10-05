# COM-426: Show the cost of renewing a subscription

**Type:** Story · **Priority:** High · **Reporter:** Morgan Lee, Customer Experience

## Context
Shoppers see an attractive first-year price but cannot see what their subscription
will cost the following year. Customer Care wants renewal pricing visible before
shoppers confirm their selection, across both of our brands.

## User story
As a shopper, I want to see both the first-year cost and the annual renewal cost,
so I can compare plans and understand the ongoing commitment.

## Acceptance criteria
1. Each catalogue card and the selected offer on its plan page show the first-year
   price clearly labelled and the annual renewal price when supplied by commerce.
   The card describes the same offer that its first-year price describes.
2. Changing device coverage updates both prices together. If an offer has no renewal
   price, do not substitute its first-year price or imply that renewal is free.
3. The order summary distinguishes the amount due today from the annual renewal
   total for the selected number of licences. Changing coverage or licence count
   updates both totals. The purchase confirmation and today's charge stay unchanged.
4. **Stretch:** When renewal costs more, show the first-year saving per licence
   alongside the selected offer. Do not show a saving when prices are equal or renewal costs less.

## Out of scope
Payments, tax, persistence, billing-cycle choices, catalogue sorting changes,
new offers, and visual redesign.

Existing tests must keep passing; add tests for new behaviour.
