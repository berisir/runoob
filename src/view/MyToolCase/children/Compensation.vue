<template>
  <div class="my-compensation">
    <h2 class="calculator-title"><span class="nohidden">北京市</span>五险一金及税后工资计算器</h2>
    <div id="origin_salary" class="p1">
      <span>税前：</span>
      <div class="input-group">
          <div class="input-group-addon">￥</div>
          <input class="form-control input_text align_right" type="text" maxlength="12" id="input_origin_salary" placeholder="0">
      </div>
      <input type="button" class="btn btn-danger" id="execute" value="计算">
    </div>
    <div id="result" class="p1" style="display: block;">
      <span>税后：</span>
      <div class="input-group">
          <div class="input-group-addon">￥</div>
          <input disabled="" class="form-control input_text align_right" type="text" maxlength="12" id="final_salary" placeholder="0">
      </div>
    </div>
    <div class="options p1">
      <input type="hidden" id="max_base_3j" value="21258">
      <input type="hidden" id="min_base_3j" value="2834">
      <input type="hidden" id="max_base_gjj" value="21258">
      <input type="hidden" id="min_base_gjj" value="2148">
      <input type="hidden" id="city" value="beijing">
      <fieldset>
        <legend>更多选项：</legend>
        <table class="options-table" style="table-layout:fixed;">
          <tbody>
            <tr>
              <td width="115px;">社保汇缴基数：</td>
              <td><input type="text" maxlength="12" class="form-control input_text align_right" id="input_base_3j" disabled="disabled"></td>
            </tr>
            <tr>
              <td>公积金汇缴基数：</td>
              <td><input type="text" maxlength="12" class="form-control input_text align_right" id="input_base_gjj" disabled="disabled"></td>
            </tr>
            <tr>
              <td colspan="3"><label class="checkbox" for="input_is_gjj"><input type="checkbox" id="input_is_gjj" checked="checked">汇缴公积金</label></td>
            </tr>
            <tr>
              <td colspan="2">
                  <label class="checkbox" for="input_is_exgjj"><input type="checkbox" id="input_is_exgjj">汇缴补充住房公积金<span style="color:#666;">(非政策强制)</span></label>
              </td>
            </tr>

          </tbody></table>
          <div>
            单位与个人汇缴比例：
            <select class="form-control" id="input_factor_exgjj" disabled="disabled">
              <option value="0.01">1%</option>
              <option value="0.02">2%</option>
              <option value="0.03">3%</option>
              <option value="0.04">4%</option>
              <option value="0.05">5%</option>
              <option value="0.06">6%</option>
              <option value="0.07">7%</option>
              <option value="0.08" selected="selected">8%</option>
            </select>
          </div>
      </fieldset>
    </div>
  </div>  
</template>
<script>

export default {
  name:"MyCompensation",
  data () {
    return {

    }
  },
  methods: {

  },
  components:{
  }
} 
</script>
<style scoped lang="less">
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
 #origin_salary, .my-resume #result {
  font-size: 0.14rem;
}
.my-compensation{
  width:100%;
  box-sizing: border-box;
  h2.calculator-title {
    font-size: 0.14rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: -15px;
    margin-right: -15px;
    margin-top: 0;
    padding: 10px 15px;
    background: #eee;
    box-shadow: 0 1px 5px rgba(0,0,0,0.24);
  }
  #origin_salary, #result {
    font-size: 20px;
    margin-top: 4px;
    .input-group {
      display: inline-table;
      width: 10px;
      vertical-align: middle;
      .input-group-addon {
        font-size: 16px;
        padding: 6px 5px;
        font-weight: 400;
        line-height: 1;
        color: #555;
        text-align: center;
        background-color: #eee;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .input-group-addon:first-child {
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    input.input_text {
      font-size: 20px;
      font-family: Tahoma;
      height: 34px;
      width: 120px;
    }
    .input-group-addon, .input-group-btn, .input-group .form-control {
      display: table-cell;
    }
    button, html input[type=button], input[type=reset], input[type=submit]{
      -webkit-appearance: button;
      cursor: pointer;
    }
    #execute {
      font-size: 0.16rem;
      color:#fff;
      width: 0.5rem;
      height: 0.3rem;
      line-height: 22px;
      vertical-align: middle;
      border-radius: 15%;
      text-align: center;
    }
    .btn-danger:hover, .btn-danger:focus {
      background-color: #c12e2a;
      background-position: 0 -15px;
    }
    .btn-danger:hover, .btn-danger:focus, .btn-danger.focus, .btn-danger:active, .btn-danger.active, .open>.dropdown-toggle.btn-danger {
      color: #fff;
      background-color: #c9302c;
      border-color: #ac2925;
    }
    .btn-danger {
      background-image: -webkit-linear-gradient(top,#d9534f 0,#c12e2a 100%);
      background-image: -o-linear-gradient(top,#d9534f 0,#c12e2a 100%);
      background-image: -webkit-gradient(linear,left top,left bottom,from(#d9534f),to(#c12e2a));
      background-image: linear-gradient(to bottom,#d9534f 0,#c12e2a 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc12e2a', GradientType=0);
      filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
      background-repeat: repeat-x;
      border-color: #b92c28;
    }
  }
  .options {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #eee;
  }
  input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
    legend {
      color: #999;
      font-size: 14px;
      border-bottom: none;
      margin-bottom: 5px;
    }
    table {
      background-color: transparent;
      border-spacing: 0;
      border-collapse: collapse;
    }
    .options-table{
      table-layout: fixed;
      tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
        tr {
          display: table-row;
          vertical-align: inherit;
          border-color: inherit;
          td {
            padding: 2px 0;
            input.input_text {
              width: 80px;
            }
            .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
              cursor: not-allowed;
              background-color: #eee;
              opacity: 1;
            }
          }
        }
      }
      label.checkbox {
        margin-top: 0;
        margin-bottom: 0;
        input {
          position: relative;
          margin-right: 4px;
          margin-left: 0;
        }
      }
      label {
        font-weight: normal;
      }
      .radio, .checkbox {
        position: relative;
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
    font-size: 21px;
    line-height: inherit;
    color: #333;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
  }
  input[type=radio], input[type=checkbox] {
    margin: 4px 0 0;
    line-height: normal;
    box-sizing: border-box;
    padding: 0;
  }
}
</style>