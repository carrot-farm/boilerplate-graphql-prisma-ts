import { schema } from 'nexus';


const Mutation = schema.mutationType({
  definition(t) {
    // ===== 유저 등록
    t.crud.createOneuser();
    
    // t.field('user', {
    //   type: 'user',
    //   args: {
    //     name: schema.stringArg()
    //   },
    //   resolve: async (parent, { name }, ctx) => {
    //     const user = await ctx.prisma.user.create({
    //       data: {
    //         name
    //       }
    //     });
    //     return user;
    //   }
    // })
  }
});

export default Mutation;