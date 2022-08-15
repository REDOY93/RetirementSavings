const Page = require('./page');

class RetirementCalculator extends Page {

    get currentAge () {
        return $('#current-age')
    }
    
    get retirementAge () {
        return $('#retirement-age');
    }

    get currentAnnualIncome () {
        return $('#current-income');
    }

    get spouseIncome () {
        return $('#spouse-income');
    }

    get currentRetirementSavings () {
        return $('#current-total-savings');
    }

    get currentAnnualSavings () {
        return $('#current-annual-savings');
    }
    
    get savingsIncreaseRate () {
        return $('#savings-increase-rate');
    }
    
    get radioYesSocialBenefits () {
        return $('label[for="yes-social-benefits"]');
    }

    get radioNoSocialBenefits () {
        return $('label[for="no-social-benefits"]');
    }
        
    get radioSingleMaritalStatus () {
        return $('label[for="single"]');
    }
    
    get radioMarriedMaritalStatus () {
        return $('label[for="married"]');
    }
    
    get socialSecurityOverride () {
        return $('#social-security-override');
    }

    get buttonCalculate()
    {
        return $('button[data-tag-id="submit"]');
    }

    get linkDefaultValuesModal()
    {
        return $('a[data-target="#default-values-modal"]');
    }

    get resultSection()
    {
        return $('#result-message');
    }

    get errorMessage()
    {
        return $('#calculator-input-alert-desc');
    }

    get modalBox()
    {
        return $('#default-values-modal-title');
    }

    get additionalIncome()
    {
        return $('#additional-income');
    }

    get retirementDuration()
    {
        return $('#retirement-duration');
    }

    get radioIncludeInflation()
    {
        return $('label[for="include-inflation"]');
    }
    
    get retirementAnnualIncome()
    {
        return $('#retirement-annual-income');
    }

    get preRetirementRoi()
    {
        return $('#pre-retirement-roi');
    }

    get postRetirementRoi()
    {
        return $('#post-retirement-roi');
    }

    get saveChanges()
    {
        return $('button[onclick="savePersonalizedValues();"]');
    }

    async setCurrentAge (value) {
        await this.currentAge.setValue(value);
    }

    async setRetirementAge (value) {
        await this.retirementAge.setValue(value);
    }

    async setCurrentAnnualIncome (value) {
        await this.currentAnnualIncome.setValue(value);
    }

    async setSpouseIncome (value) {
        await this.spouseIncome.setValue(value);
    }

    async setCurrentRetirementSavings(value) {
        await this.currentRetirementSavings.setValue(value);
    }

    async setCurrentAnnualSavings  (value) {
        await this.currentAnnualSavings.setValue(value);
    }
    
    async setSavingsIncreaseRate (value) {
        await this.savingsIncreaseRate.setValue(value);
    }
    
    async clickYesSocialBenefits () {
        await super.click(this.radioYesSocialBenefits);
    }
    
    async clickNoSocialBenefits () {
        await super.click(this.radioNoSocialBenefits);
    }

        
    async clickSingleMaritalStatus () {
        await super.click(this.radioSingleMaritalStatus);
    }

    async clickMarriedMaritalStatus () {
        await super.click(this.radioMarriedMaritalStatus);
    }
    
    async setSocialSecurityOverride (value) {
        await this.socialSecurityOverride.setValue(value);
    }

    async clickButtonCalculate()
    {
        await super.click(this.buttonCalculate);
    }

    async clickDefaultValuesModalLink()
    {
        await super.click(this.linkDefaultValuesModal);
    }

    async clickSaveChanges () {
        await super.click(this.saveChanges);
    }

    async setPostRetirementRoi (value) {
        await this.postRetirementRoi.setValue(value);
    }

    async setPreRetirementRoi (value) {
        await this.preRetirementRoi.setValue(value);
    }

    async setRetirementAnnualIncome (value) {
        await this.retirementAnnualIncome.setValue(value);
    }

    async clickIncludeInflation () {
        await super.click(this.radioIncludeInflation);
    }

    async setRetirementDuration (value) {
        await this.retirementDuration.setValue(value);
    }

    async setAdditionalIncome (value) {
        await this.additionalIncome.setValue(value);
    }

    open (page) {
        return super.open(page);
    }
}

module.exports = new RetirementCalculator();