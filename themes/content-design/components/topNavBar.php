<?php
?>
<header class="top-nav-bar">
    <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
            <span class="mdc-top-app-bar__title"><?php
                echo '<img style="height: 20px; width: auto;" src="' . get_template_directory_uri() . '/public/assets/svgs/intuit.svg" />' ;
                ?></span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Search" alt="Search">search</a>
        </section>
    </div>
</header>
