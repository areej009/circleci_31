describe('Cypress_circle', () => {
    it('Create Offer', () => {
        const p = '26.png'
        cy.login_SuperAdmin('glady@price-blick.biz', '12345678')
        cy.CreateOffer({
            OfferTitle: 'Test circleCI02',
            Detail: 'testing integration of cypress with circleCI',
            OfferImage: p,
            Price: '10',
            Credits: '5',
            Partner_payout: '.56',
            category: 'For your Nutrition',
            OfferType: 'one-time purchase',
            compatibility: 'Android',
            OfferURL: 'testcricleCI2.com'
        });
    })
})