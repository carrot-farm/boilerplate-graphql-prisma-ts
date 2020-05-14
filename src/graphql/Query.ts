import { schema } from 'nexus';

// ===== 쿼리
const Query = schema.queryType({
  definition(t) {
    // ===== 테스트
    t.string('info', { 
      resolve: () => 'hello',
      description: '테스트' 
    })


    // ===== 유저 정보
    t.list.field('users', {
      type: 'user',
      resolve: async (parent, args, ctx) => {
        return await ctx.prisma.user.findMany()
      }
    });

  },
})

export default Query;