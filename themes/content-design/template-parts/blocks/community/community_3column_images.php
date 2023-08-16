<div class="community-3column-image">
    <?php if(get_field('article_title')) {?>
    <div class="row">
        <div class="col-sm-12 articles-title">
            <?php echo $left_text = get_field('article_title'); ?>
        </div>
    </div>
    <?php } ?>
    <div class="article-line">
        <div class="hr"></div>
    </div>
    <div class="row articles_three_col">
        

        <div class="col-sm-4 fir-part">     
            <?php if( get_field('article_i')['link'] ) { ?>
            <a class="com-each-section" href="<?php echo $left_text = get_field('article_i')['link']['url']; ?>">
                <?php } ?>
                <div class="com-each-section" >
                    <div class="img_wrap">

                        <?php if( get_field('article_i')['image'] ) { ?>
                        <img src="<?php echo $left_image = get_field('article_i')['image']['url'];?>" alt="<?php echo get_field('article_i')['image']['alt'];?>">
                        <?php } ?>
                    </div>
                    <div class="text_wrap">
                        <?php if( get_field('article_i')['title'] ) { ?>
                        <div class="title">
                            <?php echo $left_title = get_field('article_i')['title']; ?>                    
                        </div>
                        <?php } ?>
                        <?php if( get_field('article_i')['content'] ) { ?>
                        <div class="content">
                            <?php echo $left_text = get_field('article_i')['content']; ?>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </a>
            <div class="home-each-section" style="display: none;">
                <?php if( get_field('article_i')['image'] ) { ?>
                <div class="img_wrap">
                    <img src="<?php echo $left_image = get_field('article_i')['image']['url'];?>" alt="<?php echo get_field('article_i')['image']['alt'];?>">
                </div>
                <?php } ?>
                <div class="text_wrap">
                    <?php if( get_field('article_i')['title'] ) { ?>
                    <div class="title">
                        <?php echo $left_title = get_field('article_i')['title']; ?>                    
                    </div>
                    <?php } ?>
                    <?php if( get_field('article_i')['content'] ) { ?>
                    <div class="content">
                        <?php echo $left_text = get_field('article_i')['content']; ?>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>

        <div class="col-sm-4 sec-part">     
            <?php if( get_field('article_ii')['link'] ) { ?>
            <a class="com-each-section" href="<?php echo $left_text = get_field('article_ii')['link']['url']; ?>">
                <?php } ?>
                <div class="com-each-section" >
                    <div class="img_wrap">

                        <?php if( get_field('article_ii')['image'] ) { ?>
                        <img src="<?php echo $left_image = get_field('article_ii')['image']['url'];?>" alt="<?php echo get_field('article_ii')['image']['alt'];?>">
                        <?php } ?>
                    </div>
                    <div class="text_wrap">
                        <?php if( get_field('article_ii')['title'] ) { ?>
                        <div class="title">
                            <?php echo $left_title = get_field('article_ii')['title']; ?>                    
                        </div>
                        <?php } ?>
                        <?php if( get_field('article_ii')['content'] ) { ?>
                        <div class="content">
                            <?php echo $left_text = get_field('article_ii')['content']; ?>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </a>
            <div class="home-each-section" style="display: none;">
                <?php if( get_field('article_ii')['image'] ) { ?>
                <div class="img_wrap">
                    <img src="<?php echo $left_image = get_field('article_ii')['image']['url'];?>" alt="<?php echo get_field('article_ii')['image']['alt'];?>">
                </div>
                <?php } ?>
                <div class="text_wrap">
                    <?php if( get_field('article_ii')['title'] ) { ?>
                    <div class="title">
                        <?php echo $left_title = get_field('article_ii')['title']; ?>                    
                    </div>
                    <?php } ?>
                    <?php if( get_field('article_ii')['content'] ) { ?>
                    <div class="content">
                        <?php echo $left_text = get_field('article_ii')['content']; ?>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <div class="col-sm-4 third-part">     
            <?php if( get_field('article_iii')['link'] ) { ?>
            <a class="com-each-section" href="<?php echo $left_text = get_field('article_iii')['link']['url']; ?>">
                <?php } ?>
                <div class="com-each-section" >
                    <div class="img_wrap">

                        <?php if( get_field('article_iii')['image'] ) { ?>
                        <img src="<?php echo $left_image = get_field('article_iii')['image']['url'];?>" alt="<?php echo get_field('article_iii')['image']['alt'];?>">
                        <?php } ?>
                    </div>
                    <div class="text_wrap">
                        <?php if( get_field('article_iii')['title'] ) { ?>
                        <div class="title">
                            <?php echo $left_title = get_field('article_iii')['title']; ?>                    
                        </div>
                        <?php } ?>
                        <?php if( get_field('article_iii')['content'] ) { ?>
                        <div class="content">
                            <?php echo $left_text = get_field('article_iii')['content']; ?>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </a>
            <div class="home-each-section" style="display: none;">
                <?php if( get_field('article_iii')['image'] ) { ?>
                <div class="img_wrap">
                    <img src="<?php echo $left_image = get_field('article_iii')['image']['url'];?>" alt="<?php echo get_field('article_iii')['image']['alt'];?>">
                </div>
                <?php } ?>
                <div class="text_wrap">
                    <?php if( get_field('article_iii')['title'] ) { ?>
                    <div class="title">
                        <?php echo $left_title = get_field('article_iii')['title']; ?>                    
                    </div>
                    <?php } ?>
                    <?php if( get_field('article_iii')['content'] ) { ?>
                    <div class="content">
                        <?php echo $left_text = get_field('article_iii')['content']; ?>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>

    </div>
</div>
<style type="text/css">
    .page-template-template-community .img_wrap {
        overflow: hidden;
    }
    
    .article-line .hr {
        border-top: 1px solid #393A3D;    
        margin-bottom: 0px !important;
        margin-top: 0px !important;
    }
    @media(min-width: 768px) {
        .page-template-template-community .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-community .articles_three_col .col-sm-4 {
            padding-top: 24px !important;
            padding-left: 18px !important;
            padding-right: 18px !important;
            padding-bottom: 24px !important;
        }
        .articles-title, .article-line {
            padding-left: 18px !important;
            padding-right: 18px !important;         
        }
        .page-template-template-community .articles_three_col .title {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-community .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
    }
    @media(min-width: 1024px) {
        .page-template-template-community .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-community .articles_three_col .col-sm-4 {
            padding-top: 28px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-bottom: 28px !important;
        }
        .articles-title, .article-line {
            padding-left: 24px !important;
            padding-right: 24px !important; 
        }
        .page-template-template-community .articles_three_col .title {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-community .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
        .articles_three_col {
            padding-left: 0px;
            padding-right: 0px;
        }
    }
    @media(min-width: 1441px) {
        .page-template-template-community .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-community .articles_three_col .col-sm-4 {
            padding-top: 30px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-bottom: 30px !important;
        }
        .articles-title, .article-line {
            padding-left: 50px !important;
            padding-right: 50px !important; 
        }
        .page-template-template-community .articles_three_col .title {
            font-size: 24px !important;
            line-height: 32px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-community .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
        .articles-title, .article-line {
            padding-left: 24px !important;
            padding-right: 24px !important; 
        }
        .page-template-template-community #main article .entry-content>.community-3column-image {
            max-width: 1344px !important;
        }
        .articles-title, .article-line {
            padding-left: 24px !important;
            padding-right: 24px !important; 
        }
    }
    @media(min-width: 1920px) {
        .page-template-template-community #main article .entry-content>.community-3column-image {
            max-width: 1746px !important;
        }
        .articles-title, .article-line {
            padding-left: 50px !important;
            padding-right: 50px !important; 
        }
    }
    @media(max-width: 767px) {
        .page-template-template-community .articles_three_col .img_wrap img {
            border-top-left-radius: 22px;
            border-top-right-radius: 22px;
        }   
        .page-template-template-community .articles_three_col .col-sm-4 {
            padding-top: 24px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-bottom: 24px !important;
        }
        .articles-title, .article-line {
            padding-left: 20px !important;
            padding-right: 20px !important; 
        }
        .page-template-template-community .articles_three_col .title {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 20px !important;
            padding-bottom: 12px !important;
        }   
        .page-template-template-community .articles_three_col .content {
            font-size: 20px !important;
            line-height: 30px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }   
        .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
        }
        .articles_three_col p {
            padding-top: 0px !important;
            padding-bottom: 0px !important;     
        }
    }

    .articles_three_col .title h1, .articles_three_col .title h2, .articles_three_col .title h3, .articles_three_col .title h4, .articles_three_col .title h5, .articles_three_col .title h6 {
        font-family: "AvenirNext forINTUIT bold" !important;
    }
    .articles_three_col p {
        color: black;
    }
</style>