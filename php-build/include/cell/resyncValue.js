/**
 * resync cell value with element value, in case the form is reseted
 * @return {[type]} [description]
 */
cell.fx.resyncValue = function(){
    //console.log('cell[#'+this.sheet.elementId+'!'+this.address+'] : resyncing value with element value');

    if(false !== this.el){
        var tagName     = this.el.prop('tagName').toLowerCase(),
            isFormTag   = this.formTags.indexOf(tagName) > -1,
            elValue     = (isFormTag) ? this.el.val() : this.el.text();

        if(this.isCheckbox && !this.el.prop('checked')){
            elValue = this.el.attr('data-unchecked-value') || '';
        }

        this.setValue(elValue);
    }
};