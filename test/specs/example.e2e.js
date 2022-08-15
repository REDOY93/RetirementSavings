const RetirementCalculator = require('../pageobjects/retirementCalculator.page');

describe('Retirement Calculator Scenarios', () => {

    beforeEach( async () => {
        await RetirementCalculator.open('/insights-tools/retirement-calculator.html');
    });

    it('User should be able to submit form with all required fields filled in', async () => {

        await RetirementCalculator.clickButtonCalculate();
        await expect(RetirementCalculator.errorMessage).toHaveTextContaining('Please fill out all required fields');
        
        await RetirementCalculator.setCurrentAge(40);
        await RetirementCalculator.setRetirementAge(68);
        await RetirementCalculator.setCurrentAnnualIncome(100000);
        await RetirementCalculator.setCurrentRetirementSavings(500000);
        await RetirementCalculator.setCurrentAnnualSavings(10);
        await RetirementCalculator.setSavingsIncreaseRate(2);

        await RetirementCalculator.clickButtonCalculate();
        await expect(RetirementCalculator.resultSection).toHaveTextContaining('Congratulations! You are exceeding your retirement goals. You are saving an extra');

    });

    it('Additional Social Security fields displau/hide based on Social Security benefits toggle', async () => {
        
        await RetirementCalculator.clickYesSocialBenefits();
        await expect(RetirementCalculator.radioSingleMaritalStatus).toBeDisplayed();
        await expect(RetirementCalculator.radioMarriedMaritalStatus).toBeDisplayed();
        await expect(RetirementCalculator.socialSecurityOverride).toBeDisplayed();

        await RetirementCalculator.clickNoSocialBenefits();
        await expect(RetirementCalculator.radioSingleMaritalStatus).not.toBeDisplayed();
        await expect(RetirementCalculator.radioMarriedMaritalStatus).not.toBeDisplayed();
        await expect(RetirementCalculator.socialSecurityOverride).not.toBeDisplayed();
        


    });

    it('User should be able to submit form with all fields filled in', async () => {

        await RetirementCalculator.clickButtonCalculate();
        await expect(RetirementCalculator.errorMessage).toHaveTextContaining('Please fill out all required fields');
        
        await RetirementCalculator.setCurrentAge(40);
        await RetirementCalculator.setRetirementAge(68);
        await RetirementCalculator.setCurrentAnnualIncome(100000);
        await RetirementCalculator.setSpouseIncome(75000);
        await RetirementCalculator.setCurrentRetirementSavings(500000);
        await RetirementCalculator.setCurrentAnnualSavings(10);
        await RetirementCalculator.setSavingsIncreaseRate(2);
        await RetirementCalculator.clickYesSocialBenefits();
        await RetirementCalculator.clickMarriedMaritalStatus();
        await RetirementCalculator.setSocialSecurityOverride(4000)

        await RetirementCalculator.clickButtonCalculate();
        await expect(RetirementCalculator.resultSection).toHaveTextContaining('Congratulations! You are exceeding your retirement goals. You are saving an extra');

    });

    it('User should be able to update default calculator values', async () => {

        await RetirementCalculator.setCurrentAge(40);
        await RetirementCalculator.setRetirementAge(68);
        await RetirementCalculator.setCurrentAnnualIncome(100000);
        await RetirementCalculator.setSpouseIncome(75000);
        await RetirementCalculator.setCurrentRetirementSavings(500000);
        await RetirementCalculator.setCurrentAnnualSavings(10);
        await RetirementCalculator.setSavingsIncreaseRate(2);
        await RetirementCalculator.clickYesSocialBenefits();
        await RetirementCalculator.clickMarriedMaritalStatus();
        await RetirementCalculator.setSocialSecurityOverride(4000)
        await RetirementCalculator.clickDefaultValuesModalLink();

        await expect(RetirementCalculator.modalBox).toBeDisplayed();

        await RetirementCalculator.setAdditionalIncome(500);
        await RetirementCalculator.setRetirementDuration(20);
        await RetirementCalculator.clickIncludeInflation();
        await RetirementCalculator.setRetirementAnnualIncome(75);
        await RetirementCalculator.setPreRetirementRoi(8);
        await RetirementCalculator.setPostRetirementRoi(5);
        await RetirementCalculator.clickSaveChanges();
        await expect(RetirementCalculator.modalBox).not.toBeDisplayed();

        await RetirementCalculator.clickButtonCalculate();
        await expect(RetirementCalculator.resultSection).toHaveTextContaining('Congratulations! You are exceeding your retirement goals. You are saving an extra');

    });
});


