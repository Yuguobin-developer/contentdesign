<?php
/**
 * DocHooks Checker class
 *
 * @package micropackage/requirements
 */

namespace BracketSpace\Notification\Signature\Vendor\Micropackage\Requirements\Checker;

use BracketSpace\Notification\Signature\Vendor\Micropackage\Requirements\Abstracts;
use BracketSpace\Notification\Signature\Vendor\Micropackage\Requirements\Requirements;

/**
 * DocHooks Checker class
 */
class DocHooks extends Abstracts\Checker {

	/**
	 * Checker name
	 *
	 * @var string
	 */
	protected $name = 'dochooks';

	/**
	 * Checks if the requirement is met
	 *
	 * @since  1.0.0
	 * @throws \Exception When provided value is not a string or numeric.
	 * @param  mixed $enabled If dochooks should be enabled or disabled.
	 * @return void
	 */
	public function check( $enabled ) {

		if ( ! is_bool( $enabled ) ) {
			throw new \Exception( 'DocHooks Check requires bool parameter' );
		}

		$reflector   = new \ReflectionClass( $this );
		$has_comment = false !== strpos( $reflector->getMethod( 'check' )->getDocComment(), '@dochooks-test' );

		if ( ! $has_comment && $enabled ) {
			$this->add_error( __( 'Support for DocHooks is required', Requirements::$textdomain ) );
		}

		if ( $has_comment && ! $enabled ) {
			$this->add_error( __( 'Support for DocHooks is superfluous', Requirements::$textdomain ) );
		}

	}

}
