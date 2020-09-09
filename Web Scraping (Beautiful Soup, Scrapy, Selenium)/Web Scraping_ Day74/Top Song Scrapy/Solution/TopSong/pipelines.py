# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

class TopAlbumPipeline(object):
    def __init__(self):
        import psycopg2
        self.conn = psycopg2.connect(user="postgres",
                dbname="scrape", 
                password="password", 
                host='127.0.0.1',
                port='5432')
        
        self.conn.cursor().execute(
                """create table if not exists top_songs (
                index int,
				artist text,
				title text,
				writers text,
				producers text,
				month text,
				year int,
				label text,
				chartNo int,
				chartWeek int,
				description text,
				album text,
				albumLabel text
                );""")
        self.conn.cursor().execute(
                """delete from top_songs where index > -1;""")

    def process_item(self, item, spider):
        cur = self.conn.cursor();
        cur.execute(
                """insert into top_songs 
                (
                index,
				artist,
				title,
				writers,
				producers,
				month,
				year,
				label,
				chartNo,
				chartWeek,
				description,
				album,
				albumLabel
                )
                values
                (%s, %s, %s, %s, %s, %s,
                %s, %s, %s, %s, %s, %s, %s);""",
                (
                    item['index'],
                    item['artist'],
                    item['title'],
                    item['writers'],
                    item['producers'],
                    item['month'],
                    item['year'],
                    item['label'],
                    item['chartNo'],
                    item['chartWeek'],
                    item['description'],
                    item['album'],
                    item['albumLabel']
                )
                )
        self.conn.commit()
        return item