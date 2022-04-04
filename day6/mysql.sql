-- 1.0 MySQL基本句法

-- select * from student
-- 查询所有数据表中的内容
-- select name from student
-- 查询仅name列的信息
-- insert into student (namenumber,name) value('105','panzi')
-- 用于插入一条数据
-- update student set name='shouzi' where id=6
-- 用于更新数字
-- delete from student where id=6

-- 2.0 where子句的运算

-- 大于运算符
-- select * from student where id>3
-- 小于运算符
-- select * from student where id<3
-- 等于运算符
-- select * from student where id=3
-- 不等运算符
-- select * from student where id!=3
-- select * from student where id<>3
-- 大于等于运算符
-- select * from student where id>=3
-- 小于等于运算符
-- select * from student where id<=3
-- 小于等于运算符

-- 3.0 and和or运算符
-- and类似于&运算符
-- select * from student where id>1 and namenumber>102
-- or类似于|运算符
-- select * from student where id>3 or namenumber>100


-- 4.0 oder by修改指定列进行排序默认升序(asc),降序(desc)
-- select * from student order by id desc
-- select * from student order by id
-- select * from student order by id asc
-- 多重排序(若当列为文本列,则以字母顺序进行排序)
-- 先对status进行排序,再对name进行排序
-- select * from student order by status,name desc 


-- 5.0 count(*)查询符合条件的总数
-- select count(*) from student where namenumber <102

-- 5.1 用AS为count(*)查询到的列起别名,默认名为(count(*))
-- select count(*) as sum from student where namenumber<102 
-- 5.2 逗号分隔为多组
-- select namenumber as number,name as uname from student

select * from student
