function clickDetailPizza(){
	$( ".clickDetailPizza" ).on( "click", function() {
  var id_produit=$(this).data('id-produit');
	if(id_produit!=""){
		
	var idfamille=$(this).data('famille');
   var id_taille=$(this).data('taille');
   // var ordre_composant=0;
   var ordre_composant=$(this).data('ordre');
  var id_menu=$(this).attr('data-menu');
var frameSrc = "ajout.php?id_famille="+idfamille+"&id_taille="+id_taille+"&id_produit="+id_produit+"&ordre_composant="+ordre_composant+"&page=detail_pizza";
					$.ajax({
					type: "GET",
					url: frameSrc,
					dataType : "html",
					error:function(msg, string){
					alert( "Error !: " + string );
					},
					success:function(data){
					popupDetail(data)

					}
					});
					
	}
			});
}

	function createCanvas(imgSRC,i,type){
		
	if(typeof i === "undefined") var i=0;
	if(typeof type === "undefined") var type="";
									// alert( " test "  );
					clickDetailPizza();
					$("#resultImageDiv").show();
					$.ajax({
					  method: "GET",
					  url: "image_produit/image_produit.php",
					  data: { action: "compose", imgsrc: imgSRC, nbre: i, type_post:type }
					}).done(function( msg ) {
						$("#resultImage").attr("src","data:image/png;base64,"+msg);
						$("#resultImageDiv").hide();
							// alert( "Data Saved: " + msg );
					  });
	}
	/*
function loadImages(sources, callback) {
		var images = {};
		var loadedImages = 0;
		var numImages = 0;
		// get num of sources
		for(var src in sources) {
		  numImages++;
		}
		for(var src in sources) {
		  images[src] = new Image();
		  images[src].onload = function() {
			if(++loadedImages >= numImages) {
			  callback(images);
			}
		  };
		  images[src].src = sources[src];
		}
	  }
	  
		function dump(obj) {
			var out = '';
			for (var i in obj) {
				out += i + ": " + obj[i] + "\n";
			}
			alert(out);
		}
		// dump(imgSRC);
            function to_image(){
                var canvas = document.getElementById("myCanvas");
                document.getElementById("resultImage").src = canvas.toDataURL();
            }
	function createCanvas(id,imgSRC,type=0){
		var canvas = document.getElementById(id);
		  var context = canvas.getContext('2d');
			var size = Object.size(imgSRC);
		  var jj=10,ii=30,kk=0,widthAdd=0,width=200,widthDefault=180,height=143,initX=10,incrementX=140,incrementY=170;
		 // alert(ceilMath);
		 // if(ceilMath==1) ceilMath=2;
		  if(type=="ingred"){
			  size-=2;
			  width=70;
			  height=50;
			  initX=10;
			  incrementX=70;
			  incrementY=50;
			  widthAdd=215; 
			  widthDefault=100; 
		  }
		 var ceilMath =Math.ceil((size)/3);
		 // alert("size:"+size+"----"+ceilMath+"*"+incrementY+"+"+widthAdd+"="+(ceilMath*(incrementY)+widthAdd));
		$("#"+id).attr("width",3*widthDefault);
		$("#"+id).attr("height",(ceilMath*(incrementY+20))+widthAdd);
		
		  loadImages(imgSRC, function(images) {
			for (var k in images){
				if(k=="sanspng"){
					
				}
				else if(k=="imgpizza"){
					context.drawImage(images[k], jj, ii, 300, 215);
					jj=initX;
					ii+=200;
				}
				// else if(k=="c1"){
					// context.drawImage(images[k], jj, ii, 100, 71);
					// alert(jj+"++"+ii);
					// context.drawImage(images["sanspng"], jj, ii, 100, 71);
					// alert(jj+"**"+ii);
					// kk++;
					// jj+=incrementX;
					// if(kk%3==0) {ii+=incrementY;jj=initX}
				// }
				else{
					// alert(k);
					context.drawImage(images[k], jj, ii, width, height);
					if(k.indexOf("ing") !== -1)
						context.drawImage(images["sanspng"], jj, ii, width, height);
					kk++;
					jj+=incrementX;
					if(kk%3==0) {ii+=incrementY;jj=initX}
				}
			}
		  });
		  setTimeout(function () {
				to_image();
				if(type==1){
						clickDetailPizza();
					}
		}, 100);
	}
	  Object.size = function(obj) {
			var size = 0, key;
			for (key in obj) {
				if (obj.hasOwnProperty(key)) size++;
			}
			return size;
		};*/
function html_recapitulatif(typePage){
	if(typeof typePage === "undefined") var typePage="";
	
			var i=0,result = '';
		var imgSRC={};
	if(typePage=="Menus"){
			 var somComposant = 0;
		var taille=0;
		var ordre=-1;
		$('.MenusComp:checked').each(function () {
				// i++;
			 var txtComposant='',txtDetails='',withOrdre='',loopQte=1;
				var qteCurrentID=$('#qtprod'+$(this).data("id-produit"));
				var qteCurrentValue=1;
					if(typeof qteCurrentID.val() !== "undefined")
					{
					  qteCurrentValue=qteCurrentID.val();
					} 
				var txtQte="";
				if(qteCurrentValue>1&&!$(this).data("details")){
					txtQte=qteCurrentValue+" - ";
					ordre+=qteCurrentValue-1;
				}else{
					loopQte=qteCurrentValue;
					withOrdre="details";
				}
					for (k = 0; k < qteCurrentValue; k++) { 
						i++;
						imgSRC["img"+i]={};
						imgSRC["img"+i]["img-src"]=$(this).data("img-src");
						imgSRC["img"+i]["text"]=$(this).data("text");
					}
				var prixcomposant=$(this).data("prixcomposant");
				if(prixcomposant>0){
					 txtComposant=' ('+(qteCurrentValue*prixcomposant).toFixed(2)+' &euro;)';
					 somComposant += qteCurrentValue*prixcomposant;
				}
				
					for (k = 0; k < loopQte; k++) { 
					ordre+=1;
					if(withOrdre!="") withOrdre="class='details"+ordre+"'";
				if($(this).data("details")) txtDetails="&nbsp;&nbsp;&nbsp;<a href='javascript: void(0);' class='clickDetailPizza' data-famille='"+$(this).data("composants_famil")+"' data-ordre='"+ordre+"' data-id-produit='"+$(this).data("id-produit")+"' data-taille='"+$(this).data("id_taille")+"'><span class='glyphicon glyphicon-pencil'></span>Personnaliser</a><div class='clear'></div>";
				result += ""+txtQte+"<span "+withOrdre+">"+$(this).data("text")+txtComposant+"</span>"+txtDetails+'<br>';
					}
		});
			 var prix_total=(parseFloat($('#prix_produit').val())+somComposant).toFixed(2);
			 var resul_html='<div class="row mrgzoro" style="margin-top:10px; margin-bottom:10px;">\
							<div class="col-lg-10 col-md-9 lh30 col-sm-9 small whiteColor darkestGreyBg"> </div>\
							<div class="col-lg-2 col-md-3 col-sm-3 redBg  whiteColor lh30 ftLarge oswald text-center"></div>\
						</div>\
			 <div class="row mrgzoro darkestGreyBg" style="margin-top:10px;">\
							<div class="col-lg-4 col-md-4 col-sm-4">&nbsp;<div id="resultImageDiv"></div><img id="resultImage" src="'+$('#image_produit').val()+'" alt=" " class="img-responsive"></div>\
							<div class="col-lg-8 col-md-8 col-sm-8">\
				<h1 class="redColor lh30 oswald ftBigLarge">'+$('#text_produit').val()+'</h1>\
				<h2 class="lh20 small whiteColor">'+result+'</h2> \
			</div>\
			</div>';
				$("#html_recapitulatif").html(resul_html);
					$("#prixTotal").html(prix_total+' &euro;');
					if(i>0) createCanvas(imgSRC,i,typePage);
	}
	else if(typePage=="detailsIngred"){
		 var sans= $(".sansComposantIngred:not(:checked)").map(
				 function () {return $(this).data('text');}).get().join(", ");
					 var ingred_supp= $(".ingredSuppIngred:checked").map(
				 function () {return $(this).data('text');}).get().join(", ");
				 var prix_ingred_supp = 0;
				 var objIngred=new Array();
				 var ingredGratuit = $("#ingredCalcul0").val();
			$('.ingredSuppIngred:checked').each(function () {
					if((typeof $("#ingredCalcul"+$(this).data('grp')).val()!== "undefined")&&(typeof objIngred[$(this).data('grp')]=== "undefined")){
						objIngred[$(this).data('grp')]=$("#ingredCalcul"+$(this).data('grp')).val();
					}
					if(ingredGratuit>0){
						ingredGratuit--;
					}
					else if(typeof objIngred[$(this).data('grp')]!== "undefined"&&objIngred[$(this).data('grp')]>0){
						objIngred[$(this).data('grp')]--;
					}
					else{
						prix_ingred_supp+=parseFloat($(this).data('prix'));
					}
			});
			var resultAccomp ="";
			/*
			var somAccomp=0;
			$('.AccompCheck:checked').each(function () {
				 var txtAccomp = '';
				
					var qteCurrentID=$('#qtprod'+$(this).val());
					var qteCurrentValue=1;
						if(typeof qteCurrentID.val() !== "undefined")
						{
						  qteCurrentValue=qteCurrentID.val();
						} 
					
					var txtQte="";
					if(qteCurrentValue>1){
						txtQte=qteCurrentValue+" - ";
					}
					var prixAccomp=$(this).data("prix");
					if(prixAccomp>0){
						 txtAccomp=' ('+(qteCurrentValue*prixAccomp).toFixed(2)+' &euro;)';
						 somAccomp += qteCurrentValue*prixAccomp;
					}
						
					resultAccomp += txtQte+$(this).data("text")+txtAccomp+'<br>';
					
			});*/
				 if(sans!=""){
					 sans="<b>Sans.: </b>"+sans+"<br>";
				 }
				 // if(resultAccomp!=""){
					 // resultAccomp="<b>Accompagnement: </b><br>"+resultAccomp+"<br>";
				 // }
					var txt_prix_ingred_supp='';
					if(prix_ingred_supp>0){
						 txt_prix_ingred_supp=' ('+prix_ingred_supp.toFixed(2)+' &euro;)';
					}
				 if(ingred_supp!=""){
					 ingred_supp="<b>Ingrédients Supp.: </b>"+ingred_supp+txt_prix_ingred_supp+"<br>";
				 }
				 // var prix_total=(parseFloat($('#prix_produit').val())+prix_ingred_supp+somAccomp).toFixed(2);
				 var resul_html='<div class="row mrgzoro" style="margin-top:10px; margin-bottom:10px;">\
								<div class="col-lg-10 col-md-9 lh30 col-sm-9 small whiteColor darkestGreyBg"> </div>\
							</div>\
				 <div class="row mrgzoro darkestGreyBg" style="margin-top:10px;">\
								<div class="col-lg-4 col-md-4 col-sm-4"><img src="'+$('#image_produitIngred').val()+'" alt=" " class="img-responsive"></div>\
								<div class="col-lg-8 col-md-8 col-sm-8">\
					<h1 class="redColor lh30 oswald ftBigLarge">'+$('#text_produitIngred').val()+'</h1>\
					<h2 class="lh20 small whiteColor">'+sans+ingred_supp+resultAccomp+'</h2> \
				</div>\
							</div>';
					// $("#html_recapitulatif").html(resul_html);
					// $("#prixTotal").html(prix_total+' &euro;');
					// alert("okkkkkk");
					$("#html_recapitulatif_ingred").html(resul_html);
	}
	else if(typePage=="ingred"){
		imgSRC["img"+i]={};
		imgSRC["img"+i]["img-src"]=$('#image_produits').val();
		imgSRC["img"+i]["text"]="";
		imgSRC["img"+i]["type"]="ingredientProduit";
		imgSRC["img"+i]["ingredient"]="";
		
		// imgSRC["sanspng"]="images/sans.png";
		 var sans= $(".sansComposant:not(:checked)").map( function () {return $(this).data('text');}).get().join(", ");
		 var ingred_supp= $(".ingredSupp:checked").map( function () {return $(this).data('text');}).get().join(", ");
				 var prix_ingred_supp = 0;
				 var objIngred=new Array();
				 var ingredGratuit = $("#ingredCalcul0").val();
				 // i=0;
			$('.sansComposant:not(:checked)').each(function () {
						i++;
						imgSRC["img"+i]={};
						imgSRC["img"+i]["img-src"]=$(this).data("img-src");
						imgSRC["img"+i]["text"]=$(this).data("text");
						imgSRC["img"+i]["type"]="ingredient";
						imgSRC["img"+i]["ingredient"]="sans";
			});
			 // i=0;
			$('.ingredSupp:checked').each(function () {
					if((typeof $("#ingredCalcul"+$(this).data('grp')).val()!== "undefined")&&(typeof objIngred[$(this).data('grp')]=== "undefined")){
						objIngred[$(this).data('grp')]=$("#ingredCalcul"+$(this).data('grp')).val();
					}
					if(ingredGratuit>0){
						ingredGratuit--;
					}
					else if(typeof objIngred[$(this).data('grp')]!== "undefined"&&objIngred[$(this).data('grp')]>0){
						objIngred[$(this).data('grp')]--;
					}
					else{
						prix_ingred_supp+=parseFloat($(this).data('prix'));
					}
					// for (k = 0; k < qteCurrentValue; k++) { 
						i++;
						imgSRC["img"+i]={};
						imgSRC["img"+i]["img-src"]=$(this).data("img-src");
						imgSRC["img"+i]["text"]=$(this).data("text");
						imgSRC["img"+i]["type"]="ingredient";
						imgSRC["img"+i]["ingredient"]="sup";
						// imgSRC["sup"+i]=$(this).data("img-src");
					// }
			});
			var somAccomp=0;
			var resultAccomp ="";
			 // i=0;
			$('.AccompCheck:checked').each(function () {
				 var txtAccomp = '';
				
					var qteCurrentID=$('#qtprod'+$(this).val());
					var qteCurrentValue=1;
						if(typeof qteCurrentID.val() !== "undefined")
						{
						  qteCurrentValue=qteCurrentID.val();
						} 
					
					var txtQte="";
					if(qteCurrentValue>1){
						txtQte=qteCurrentValue+" - ";
					}
					for (k = 0; k < qteCurrentValue; k++) { 
						i++;
						imgSRC["img"+i]={};
						imgSRC["img"+i]["img-src"]=$(this).data("img-src");
						imgSRC["img"+i]["text"]=$(this).data("text");
						imgSRC["img"+i]["type"]="ingredient";
						imgSRC["img"+i]["ingredient"]="accomp";
						// imgSRC["acc"+i]=$(this).data("img-src");
					}
					var prixAccomp=$(this).data("prix");
					if(prixAccomp>0){
						 txtAccomp=' ('+(qteCurrentValue*prixAccomp).toFixed(2)+' &euro;)';
						 somAccomp += qteCurrentValue*prixAccomp;
					}
						
					resultAccomp += txtQte+$(this).data("text")+txtAccomp+'<br>';
					
			});
			
				 if(sans!=""){
					 sans="<b>Sans.: </b>"+sans+"<br>";
				 }
				 if(resultAccomp!=""){
					 resultAccomp="<b>Accompagnement: </b><br>"+resultAccomp+"<br>";
				 }
					var txt_prix_ingred_supp='';
					if(prix_ingred_supp>0){
						 txt_prix_ingred_supp=' ('+prix_ingred_supp.toFixed(2)+' &euro;)';
					}
				 if(ingred_supp!=""){
					 ingred_supp="<b>Ingrédients Supp.: </b>"+ingred_supp+txt_prix_ingred_supp+"<br>";
				 }
				 var prix_total=(parseFloat($('#prix_produit').val())+prix_ingred_supp+somAccomp).toFixed(2);
				 var resul_html='<div class="row mrgzoro" style="margin-top:10px; margin-bottom:10px;">\
								<div class="col-lg-10 col-md-9 lh30 col-sm-9 small whiteColor darkestGreyBg"> </div>\
							</div>\
				 <div class="row mrgzoro darkestGreyBg" style="margin-top:10px;">\
								<div class="col-lg-4 col-md-4 col-sm-4">&nbsp;<div id="resultImageDiv"></div><img id="resultImage" src="'+$('#image_produit').val()+'" alt=" " class="img-responsive">\
								</div>\
								<div class="col-lg-8 col-md-8 col-sm-8">\
					<h1 class="redColor lh30 oswald ftBigLarge">'+$('#text_produit').val()+'</h1>\
					<h2 class="lh20 small whiteColor">'+sans+ingred_supp+resultAccomp+'</h2> \
				</div>\
							</div>';
					$("#html_recapitulatif").html(resul_html);
					$("#prixTotal").html(prix_total+' &euro;');
					if(i>0) createCanvas(imgSRC,i,typePage);
	}
	else if(typePage=="pageOffre"){
		var i=0;
		$('.OffreComp:checked').each(function () {
			// alert("ok"+$(this).data("offre"));
					var qteCurrentID=$('#qtprod'+$(this).data("offre")+$(this).val());
					var qteCurrentValue=1,txtQte="";
						if(typeof qteCurrentID.val() !== "undefined")
						{
						  qteCurrentValue=qteCurrentID.val();
						}
				if(qteCurrentValue>1){
					txtQte=qteCurrentValue+" - ";
					
				}
					for (k = 0; k < qteCurrentValue; k++) { 
						i++;
						imgSRC["img"+i]={};
						imgSRC["img"+i]["img-src"]=$(this).data("img-src");
						imgSRC["img"+i]["text"]=$(this).data("text");
						imgSRC["img"+i]["type"]="offre";
						imgSRC["img"+i]["ingredient"]="";
						// imgSRC["img"+i]=$(this).data("img-src");
					}
				result += txtQte+$(this).data("text")+'<br>';
		});
			 var resul_html='<div class="row mrgzoro darkestGreyBg" style="margin-top:10px;">\
							<div class="col-lg-4 col-md-4 col-sm-4">&nbsp;<div id="resultImageDiv"></div><img id="resultImage" src="'+$('#image_produit').val()+'" alt=" " class="img-responsive"></div>\
							<div class="col-lg-8 col-md-8 col-sm-8">\
				<h1 class="redColor lh30 oswald ftBigLarge">'+$('#text_produit').val()+'</h1>\
				<h2 class="lh20 small whiteColor">'+result+'</h2> \
			</div>\
						</div>';
				$("#html_recapitulatif").html(resul_html);
				if(i>0) createCanvas(imgSRC,i,typePage); else $("#resultImage").hide();
	}else{
		console.log("image picker erreur!");
	}
}
function changeFunction(a){
		var id=a.val();
		var pcn=a.data('pcn');
		$('.checkProd'+pcn).prop('checked', false);
		$(".filpclass"+pcn).removeClass('hover');
		if(typeof id=== 'string'){
			$('#check'+pcn+"_"+id).prop('checked', true);
			$("#flip-container-hover"+pcn+"_"+id).addClass('hover');
		}else{
			$.each(id, function( index,value ) {
				$("#flip-container-hover"+pcn+"_"+value).addClass('hover');
				$('#check'+pcn+"_"+value).prop('checked', true);
			});
		}
}
$('.changeFunction').change(function () {
	 changeFunction($(this));
});
function imagepickerFN(id){
	
	if(typeof id === "undefined") var id="";
	$(".image_picker_produits"+id).imagepicker({
  hide_select:  true, 
  show_label:   true,
  changed:function(){
	  changeFunction($(this));
	}
	});
}
imagepickerFN();
$('.QteCalcul').click(function () {
		var qteCurrentID=$('#'+$(this).data("id"));
		var qteCurrentValue=qteCurrentID.val();
		var qteType=$(this).data("type");
		var tabnbre=$(this).data("tabnbre");
		var som=0;
		var choixMax=$(this).data("max");
		var inputQte=$('.inputQte'+tabnbre).filter(function() {
			return parseInt($(this).val()) > 0;
		});
		if(inputQte.length>0){
			inputQte.each(function( value ) {
				som+=parseInt($(this).val());
				var selectID=$("#"+qteType+$(this).data("id-qte"));
			});
		}
	if(som>=choixMax&&qteType=="Plus"){
		alert("vous avez "+choixMax+" choix!");
		// $("#next").click();
	} 
	else{
		if(qteType=="Minus"){
			if(qteCurrentValue>0){
				qteCurrentValue--;
				qteCurrentID.val(qteCurrentValue);
			}
		}else if(qteType=="Plus"){
			if(qteCurrentValue<$(this).data("max")){
				qteCurrentValue++;
				qteCurrentID.val(qteCurrentValue);
			}
		}
	}
if(qteCurrentValue>0){
	$('#'+$(this).data("select-id")+" option[value='"+$(this).data("value")+"']").prop("selected", true).change();
	$("#flip-container-hover"+$(this).data("pcn")+"_"+$(this).data("value")).addClass('hover');
}else if(qteCurrentValue==0){
	$('#'+$(this).data("select-id")+" option[value='"+$(this).data("value")+"']").prop("selected", false).change();
	$("#flip-container-hover"+$(this).data("pcn")+"_"+$(this).data("value")).removeClass('hover');
}
	 if(som==choixMax-1&&qteType=="Plus"){
		$("#next").click();
		// html_recapitulatif($("#typePage").val());
	}
});
    function adjustIframeHeight() {
        var $body   = $('body'),
                $iframe = $body.data('iframe.fv');
        if ($iframe) {
            $iframe.height($body.height());
        }
    }
    function ingorerPicker() {
			$('body,html').animate({
							scrollTop: 0
						}, 800);
    }
function bootstrapWizardFunction(id){
	if(typeof id === "undefined") var id="";
	$('.example-one'+id).bootstrapWizard({
			onNext: function(tab, navigation, index) {
				ingorerPicker();
				var numTabs = navigation.find('li').length;
				if (index === numTabs) {
		   if($("#activeCMD"+id).val()==1&&id==""){
			   var typeCMD="Valider";
				if(typeof $("#TypeCMD"+id).val() !== "undefined") typeCMD=$("#TypeCMD"+id).val();
					AddToCart(typeCMD,$("#id_produit"+id).val(),$("#id_famille"+id).val(),$("#id_taille"+id).val(),$('#qtprodValider'+id).val());
			}else if(id=="Ingred"){
				validateDetails();
			}
			return false;
				}
				return true;
			},
			onPrevious: function(tab, navigation, index) {
				ingorerPicker();
			},
			onTabShow: function(tab, navigation, index) {
				if($("#activeCMD"+id).val()==1){
					var numTabs = navigation.find('li').length;
					var buttonValidate='<span class="glyphicon glyphicon-shopping-cart"></span>Ajouter au panier';
					if(id=="Ingred"){
						buttonValidate='<span class="glyphicon glyphicon-ok"></span>Valider';
					}
					$('.example-one'+id).find('.next')
							.removeClass('disabled')
							.find('a')
							.html(index === numTabs - 1 ? buttonValidate : '<span class="glyphicon glyphicon-arrow-right"></span>Suivant');
				}
				adjustIframeHeight();
				if(index === numTabs-1) html_recapitulatif($("#typePage"+id).val());
			}
	});
}
