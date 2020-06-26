<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class StudentsData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        DB::table('students')->insert(
          array(
           'name' => 'Aminah Haasan',
           'club_id' => '004',
           'created_at' => date('Y-m-d H:m:s'),
           'updated_at' => date('Y-m-d H:m:s')
           )
          );
        DB::table('students')->insert(
          array(
           'name' => 'Lee Chong Wai',
           'club_id' => '001',
           'created_at' => date('Y-m-d H:m:s'),
           'updated_at' => date('Y-m-d H:m:s')
           )
          );
        DB::table('students')->insert(
          array(
           'name' => 'Kavitha Kaur',
           'club_id' => '001',
           'created_at' => date('Y-m-d H:m:s'),
           'updated_at' => date('Y-m-d H:m:s')
           )
          );
        DB::table('students')->insert(
          array(
           'name' => 'Adam Sinclair',
           'club_id' => '001',
           'created_at' => date('Y-m-d H:m:s'),
           'updated_at' => date('Y-m-d H:m:s')
           )
          );
        DB::table('students')->insert(
          array(
           'name' => 'Lili Chua',
           'club_id' => '003',
           'created_at' => date('Y-m-d H:m:s'),
           'updated_at' => date('Y-m-d H:m:s')
           )
          );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        DB::table('students')->where('name', '=', 'Aminah Haasan')->delete();
        DB::table('students')->where('name', '=', 'Lee Chong Wai')->delete();
        DB::table('students')->where('name', '=', 'Kavitha Kaur')->delete();
        DB::table('students')->where('name', '=', 'Adam Sinclair')->delete();
        DB::table('students')->where('name', '=', 'Lili Chua')->delete();
    }
}
