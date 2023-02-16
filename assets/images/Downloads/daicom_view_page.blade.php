@extends('master')
@section('custom-css')
<link rel="stylesheet" href="{{asset('daicom/idv/idv.css')}}">
<link rel="stylesheet" href="{{asset('daicom/idv/sidebar.css')}}">
<link rel="stylesheet" href="{{asset('daicom/shared/dynamic-component-style.410f2fc6.css')}}">
@endsection
<style>
    .idv-section {
      padding: 0 1.5rem;
      display: grid;
      height: 100%;
    }
    body{
      overflow-x: hidden;
    }
    .modal-window div{
        opacity: 0;
        z-index: -1;
    }

    .idv-section::before {
  position: absolute;
  height: 100%;
  width: 100%;
  background: transparent;
  content: '';
  z-index: 9;
    }
    .modal-window h2{
        text-align: center;
        line-height: 40px;
    }
    .idv-placeholder__buttons-wrapper{
        display: none;
        opacity: 0; 
        z-index: -1; 
    }
  </style>
@section('main-content')
<div class="daicom_machine mt-2">
  <p>{{asset('uploads/reports_img/').$fileName}}</p>
    <input type="hidden" value="{{asset('uploads/reports_img/').$fileName}}" class="file_name" >

    <div class="d-flex flex-column ">
      <div class="main-content">
        <section>
          <section class="idv-section" >
            <div id="idv"></div>
          </section>
      </div>
    </div>

@endsection

@section('custom-scripts')
<script src="{{asset('daicom/vendors/vendors-script.js')}}"></script>
<script src="{{asset ("daicom/global/global.js")}}"></script>
<script src="{{asset ("daicom/shared/vue-js.js")}}"></script>
<script src="{{asset ("daicom/shared/im-jsdk.js")}}"></script>
<script src="{{asset ("daicom/shared/dicom-sdk.js")}}"></script>
<script src="{{asset ("daicom/shared/IMDCSDK.umd.min.js")}}"></script>
<script src="{{asset ("daicom/shared/MPR.js")}}"></script>
<script src="{{asset ("daicom/shared/publisher-subscriber.min.js")}}"></script>
<script src="{{asset ("daicom/idv/idv.umd.min.js")}}" type="text/javascript"></script>
<script src="{{asset ("js/automation.js")}}" type="text/javascript"></script>


@endsection
