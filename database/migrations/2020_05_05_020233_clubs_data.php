<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ClubsData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        DB::table('clubs')->insert(
          array(
           'name' => 'IT club',
           'created_at' => date('2020-03-30 11:20:12'),
           'updated_at' => date('2020-03-30 11:20:12')
           )
          );
        DB::table('clubs')->insert(
          array(
           'name' => 'Wushu club',
           'created_at' => date('2020-03-30 11:20:56'),
           'updated_at' => date('2020-03-30 11:20:56')
           )
          );
        DB::table('clubs')->insert(
          array(
           'name' => 'Data science club',
           'created_at' => date('2020-03-30 11:30:55'),
           'updated_at' => date('2020-03-30 11:30:55')
           )
          );
        DB::table('clubs')->insert(
          array(
           'name' => 'Mathematics club',
           'created_at' => date('2020-03-30 11:32:51'),
           'updated_at' => date('2020-03-30 11:32:51')
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
        DB::table('clubs')->where('name', '=','IT club')->delete();
        DB::table('clubs')->where('name', '=','Wushu club')->delete();
        DB::table('clubs')->where('name', '=','Data science club')->delete();
        DB::table('clubs')->where('name', '=','Mathematics club')->delete();
    }
}
